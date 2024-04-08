import Task from "./Task"
function TasksList() {
    return (
      <div>
        <section className="container">
            <form className="task-form">
                <input type="text" className="task-input js-text-task-filter" placeholder="Ejemplo: gimnasio"/>
                <button className="add-task-btn js-btn-filter">Buscar</button>
            </form>
            <ul className="task-list">
               <Task/> 
            </ul>
        </section>
      </div>
    )
  }
  
  export default TasksList