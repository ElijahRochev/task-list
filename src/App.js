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
    setTitle("")
  }

  function deleteTask(task) {
    setTasks(tasks.filter(t => t.title !== task.title))
  }

  return (

    <div className="App">
      <div className="taskList">
        <h1>todos</h1>
        <form onSubmit={addNewTask}>
          <MyInput 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder="Name"
            
          />
        </form>
        <TaskList remove={deleteTask} tasks={tasks}/>
      </div>
    </div>

  );
}

export default App;
