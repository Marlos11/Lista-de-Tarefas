import { Checkbox, IconButton } from '@mui/material';
import styles from './Card.module.css';

import { CircleOutlined, CheckCircle, DeleteOutline } from '@mui/icons-material';
import ModalTask from './ModalTask';
import { useState } from 'react';


function Card({ task,tasks, onSetTasks}) {

    const [open, setOpen] = useState(false);
    const [isEditing,setIsEditing] = useState(false)
    const[isCheked,setIsCheked] = useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false),setIsEditing(false) }

    const handleEdting = () =>{
        setIsEditing(true)
    }

const handleDelete = (id)=>{
    const taskToDelete = tasks.filter(task=>task.id !==id)
    onSetTasks(taskToDelete)
}


    
    return (
        <>
            <div className={styles.Card}>
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                    icon={<CircleOutlined />}
                    checkedIcon={<CheckCircle />}
                    onChange={(event)=>setIsCheked(event.target.checked)}

                />
                <label onClick={handleOpen}className={isCheked? styles.checked:''}>{task.task}</label>
                <IconButton onClick={()=>handleDelete(task.id)}> 
                    <DeleteOutline />
                </IconButton>
            </div>

            <ModalTask
                task={task}
                isEditing={isEditing}
                onSetTasks={onSetTasks}
                OnSetIsEditing={setIsEditing}

                open={open}
                onHandleEdting = {handleEdting}
                onHandleClose={handleClose}

            />

        </>
    );
}

export default Card
