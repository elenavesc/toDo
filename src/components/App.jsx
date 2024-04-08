import { useState, useEffect } from 'react'
import '../scss/App.scss'
import Header from './Header.jsx'
import Form from './task/Forms.jsx'
import TasksList from './task/Taskslist.jsx'
import TipsList from './tips/Tipslist.jsx'
import {Routes,Route} from 'react-router-dom'



// function App() {
//   return (
    // <div>
    //   <Header/>
    // <main className="main">
    //     <Routes>
    //     <Route path="/" element={<Form />} />
    //     <Route path="/" element={<TasksList />} />
    //     <Route path="/" element={<TipsList />} />
    //     </Routes>
    // </main>

    // </div>
    const SERVER_URL = "https://dev.adalab.es/api/todo/elenavesc";

    
    
    function App() {
      const [tasks, setTasks] = useState([]);
    
      const [newTask, setNewTask] = useState("");
    
      useEffect(() => {
        fetch(SERVER_URL)
          .then((response) => response.json())
          .then((data) => {
            if (!data.error) {
              setTasks(data.results);
            } else {
              console.error(`Error en el servidor: ${data.error.message}`);
              console.log(data.error.description);
            }
          })
          .catch((error) => {
            console.error(`Error de conexión: ${error}`);
          });
      }, []);
    
      const handleClickCompleteTask = (taskId) => {
        const tasksClone = [...tasks];
        const clickedTask = tasksClone.find((task) => task.id === taskId);
        clickedTask.completed = !clickedTask.completed;
    
        setTasks(tasksClone);
      };
    
      const handleInputNewTask = (newTaskName) => {
        setNewTask(newTaskName);
      };
    
      const handleClickAddTask = () => {
        const newTaskObject = {
          name: newTask,
          completed: false,
        };
    
        fetch(SERVER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTaskObject),
        })
          .then((response) => response.json())
          .then((dataResponse) => {
            if (dataResponse.success) {
              newTaskObject.id = dataResponse.id;
    
              const tasksWithNewTask = [...tasks, newTaskObject];
    
              setTasks(tasksWithNewTask);
              setNewTask("");
            }
          });
      };
    
      return (
        <div>
          <Header />
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <Form
                    onInput={handleInputNewTask}
                    onClickAdd={handleClickAddTask}
                    newTaskValue={newTask}
                  />
                }
              />
              <Route
                path="/NuevaTarea"
                element={
                  <TasksList
                    tasks={tasks}
                    onClickCompleted={handleClickCompleteTask}
                  />
                }
              />
              <Route path="/consejos" element={<TipsList />}></Route>
            </Routes>
          </main>
        </div>
      );
    }
  

export default App
