import MyInput from "./components/Ipnut/MyInput";
import TaskList from "./components/TaskList";
import "./style/app.css"
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {title: "wait"},
    {title: "work"},


  ])
  const [title, setTitle] = useState([])

  const addNewTask = (e) => {
    e.preventDefault()
    const newTask = {
      title
    }
    setTasks([...tasks, newTask])
  }

  return (

    <div className="App">
      <div className="taskList">
        <h1>todos</h1>
        <form>
          <MyInput 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder="Name"
            
          />
        </form>
        <TaskList tasks={tasks}/>
      </div>
    </div>

  );
}

export default App;
