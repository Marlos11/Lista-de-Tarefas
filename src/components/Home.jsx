import Header from './Header';
import Card from './Card'
import AddTask from './AddTask'
import styles from './Home.module.css'
import { useState } from 'react';


function Home() {
    const [tasks,setTasks] =useState([
        {
            id: '1',
            task: 'Leitura',
            description: 'Ler 20 Paginas Do Capitulo 3 '
        },
        {
            id: '2',
            task: 'React',
            description: 'Assistir 3 Aulas e Fazer Exercicios práticos '
        },
        {
            id: '3',
            task: 'Node',
            description: ''
        },
    ])

    return (
        <div className={styles.home}>
            <Header />


            {tasks.map(task => (
                <Card

                    key={task.id}
                    task={task}
                    tasks={tasks}
                    onSetTasks = {setTasks}
                />
            ))}


            <AddTask 
            tasks={tasks}
            onSetTasks={setTasks}
            />
        </div>
    );
}

export default Home;