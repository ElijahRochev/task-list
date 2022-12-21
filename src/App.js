import TaskList from "./components/TaskList";
import "./style/app.css"
import { useState } from "react";
import TaskForm from "./components/TaskForm";
function App() {
  const [tasks, setTasks] = useState([
  ])

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.title !== task.title))
  }
  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const [checked, setChecked] = useState(false);
	
	function handleChange() {
		setChecked(!checked);
	}
	
  return (

    <div className="App">
      <div className="taskList">
        <h1>todos</h1>
        <TaskForm create={createTask}/>
        <TaskList checked={checked} change={handleChange} remove={deleteTask} tasks={tasks}/>
      </div>
    </div>

  );
}

export default App;
