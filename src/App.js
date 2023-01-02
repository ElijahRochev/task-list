import TaskList from "./components/TaskList";
import "./style/app.css"
import { useState } from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom"
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
import MyButton from "./components/Button/MyButton";
function App() {
  const [tasks, setTasks] = useState([])
  const [check, setCheck] = useState(true)
  const createTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }
  const allTask = () => {
    setTasks(tasks.filter(task => task))
  }
  function removeTask(id) {
    setTasks([...tasks].filter(task => task.id !== id))
  }
  function allChecked() {
    tasks.map(task => task.status = check)
    setCheck(!check)
  }
  function clearChecked() {
    setTasks(tasks.filter(task => !task.status))
  }
  function hideMenu() {
    
  }
  return (

    <div className="App">
      <div className="taskList">
        <h1>todos</h1>
        <div className="shadowBox">
        <div className="header">
          <div className="allCheck" onClick={allChecked}>❯</div>
        <TaskForm create={createTask}/>
        </div>
          <div id="main" className={`main ${tasks.length == 0 ? "nonVisible" : ""}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList removeTask={removeTask} setTasks={setTasks} allTask={allTask} tasks={tasks} />} />
            <Route path="/active" element={<TaskList removeTask={removeTask} setTasks={setTasks} allTask={allTask} tasks={tasks.filter(task => !task.status )}  />} />
            <Route path="/completed" element={<TaskList removeTask={removeTask} setTasks={setTasks} allTask={allTask} tasks={tasks.filter(task => task.status)}  />} />
          </Routes>
          <div className="buttonMenu">
            <div className="itemsLeft">{tasks.filter(task => !task.status).length} Items Left</div>
              <div className="navLinksBlock">
                <NavLink className="navLinks" to={'/'} >
                  All
                </NavLink>
                <NavLink className="navLinks" to={'/active'}>
                  Active
                </NavLink>
                <NavLink className="navLinks" to={'/completed'} >
                  Completed
                </NavLink>
                </div>
              <MyButton className='clearComponents' onClick={clearChecked} title="Clear completed"/>
              </div>
              </BrowserRouter>
          </div>
          </div>
      </div>
    </div>

  );
}

export default App;
/* <TaskList setFilteredTasks={setFilteredTasks} filteredTasks={filteredTasks} setTasks={setTasks} statusAllTask={checked} change={handleChange}  tasks={tasks}/>
 */