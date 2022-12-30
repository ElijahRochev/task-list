import TaskList from "./components/TaskList";
import "./style/app.css"
import { useState } from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom"
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
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
  return (

    <div className="App">
      <div className="taskList">
        <h1>todos</h1>
        <div className="header">
          <div className="allCheck" onClick={allChecked}>❯</div>
        <TaskForm create={createTask}/>
        </div>
          <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList removeTask={removeTask} setTasks={setTasks} allTask={allTask} tasks={tasks} />} />
            <Route path="/active" element={<TaskList removeTask={removeTask} setTasks={setTasks} allTask={allTask} tasks={tasks.filter(task => !task.status )}  />} />
            <Route path="/completed" element={<TaskList removeTask={removeTask} setTasks={setTasks} allTask={allTask} tasks={tasks.filter(task => task.status)}  />} />
          </Routes>
          <NavLink to={'/'} >
            All
          </NavLink>
          <NavLink to={'/active'}>
            Active
          </NavLink>
          <NavLink to={'/completed'} >
            Completed
          </NavLink>
        </BrowserRouter>
      <div>{tasks.length} Items Left</div>
          </div>
      </div>
    </div>

  );
}

export default App;
/* <TaskList setFilteredTasks={setFilteredTasks} filteredTasks={filteredTasks} setTasks={setTasks} statusAllTask={checked} change={handleChange}  tasks={tasks}/>
 */