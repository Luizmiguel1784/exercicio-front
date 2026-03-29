import Modal from './Modal/modal.jsx'
import { useState } from 'react';
import styles from './TaskList.module.css';

export default function TaskList() {
    
    const [task,setTask] = useState([]);
    const [input,setInput] = useState('');
    const [showModal , setShowModal] = useState(false)





    function addTask() {

        if(input.trim()=== ''){

            return;
        }
        setTask((prev) => [task, input]);
        setInput('');
        setShowModal(true);
    }

    function removeTask(indexToRemove) {

        const newTask = task.filter((_, index) => index !== indexToRemove);
        setTask(newTask)
    }


    return(
    <>
    <div className={styles.container}>

        <h2>Tarefas</h2>

        <input className={styles.input} 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Digite uma tarefa'
        />

        <button 
        className={styles.button}
        onClick={addTask}
        >Adicionar</button>

        <div className={styles.list}>
        {task.map((task,index) => (<div 
        key={index} 
        className={styles.task}
        onClick={()=> removeTask(index)}
        >
            
          {task}  
        </div>

    ))}
    </div>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Tarefa criada com sucesso!</h2>

        <button onClick={() => setShowModal(false)}>
        Fechar
        </button>
    </Modal>
    </div>
    </>

)
}