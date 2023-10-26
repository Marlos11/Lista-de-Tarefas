
import { AddCircleOutline } from '@mui/icons-material';
import styles from './AddTask.module.css'
import { useState } from 'react';
import ModalTask from './ModalTask';

function AddTask({tasks,onSetTasks}) { 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (  
       <>
       <div className={styles.AddTask} onClick={handleOpen}>
          <AddCircleOutline/>
      <h5>Add Task </h5>
    </div>
    <ModalTask 
    tasks={tasks}
    open={open}
    onHandleClose={handleClose}
    onSetTasks={onSetTasks}
    />
    </>
    );
}

export default AddTask