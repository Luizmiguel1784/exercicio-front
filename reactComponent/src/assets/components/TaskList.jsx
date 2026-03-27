export default function TaskList() {
    
    const tasks = ['Estudar','Treinar']

    return(
    <>
    <div className={styles.container}>

        {tasks.map((task,index) => (<div className={styles.task}>
            
          {task}  
        </div>
    ))}
    </div>
    </>

)
}