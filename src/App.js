import TaskList from "./components/TaskList";
import "./style/app.css"
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
function App() {
  const [tasks, setTasks] = useState([])
  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.title !== task.title))
  }
  const createTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  const [checked, setChecked] = useState(false);
  
	function handleChange() {
		setChecked(!checked);
	}
  const activeTask = (task) => {
    setTasks(tasks.filter(t => t.checked == true))
  }
  return (

    <div className="App">
      <div className="taskList">
        <h1>todos</h1>
        <div>
        <button>checked</button>
        <TaskForm create={createTask}/>
        </div>
        <TaskList checked={checked} change={handleChange} remove={deleteTask} tasks={tasks}/>
      <Footer activeTask={activeTask} tasks={tasks}/>
      </div>
    </div>

  );
}

export default App;
