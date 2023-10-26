import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import styles from './ModalTask.module.css'
import { useMemo } from "react";


function ModalTask({ open, task, tasks, onSetTasks, onHandleClose, 
    onHandleEdting, isEditing,OnSetIsEditing }) {



    const handleSumbit = (event) => {
        event.preventDefault()

        let newTitle = event.target.title.value
        let newDescription = event.target.description.value

        let lastTitle = task?.task
        let lastDescription = task?.description

        const updateItem = { ...task, description: newDescription ?? lastDescription }

        
        if(!lastTitle){
  onSetTasks([...tasks, {
          id: Math.random(),
          task: newTitle,
          description: newDescription
      }]) 
       
        }else{
            onSetTasks((prevItens) =>
            prevItens.map(prevItem => prevItem.task === updateItem.task ? updateItem : prevItem))                                                                        

        }
        
        onHandleClose()


       
    }

    const showModal = useMemo(() => {
        let result = { title: '', description: '' }

        if (!task) {
            result.title = <input name="title" type="text" placeholder="Nome da Task " required />
        } else {
            result.title = <h4>{task.task}</h4>
        }

        if (task?.description && !isEditing) {
            result.description = <p onClick={onHandleEdting}>{task?.description}</p>
        } else {
            result.description = (
                <>
                    <textarea
                        defaultValue={task?.description} name="description" placeholder="Descrição da Task "></textarea>
                    <footer className={styles.controls}>
                        <button type="button"
                         onClick={()=>OnSetIsEditing(false)}
                            disabled={task?false:true}>
                            Cancelar
                        </button>
                        <button type="submit">
                            Salvar
                        </button>
                    </footer>
                </>
            )
        }
        return result
    }, [task, isEditing, onHandleEdting,OnSetIsEditing])




    return (
        <Modal
            open={open}
            onClose={onHandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.ModalTask}>
                <form onSubmit={handleSumbit} className={styles.form}>
                    <header>
                        {showModal.title}

                        <IconButton onClick={onHandleClose}>
                            <Close />
                        </IconButton>

                    </header>
                    {showModal.description}


                </form>
            </Box>
        </Modal>
    );
}

export default ModalTask;