import React, { useState } from "react";
import {nanoid} from "nanoid"
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.js'
import Form from './components/Form.js'
import FilterButton from './components/FilterButton';



function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(_id) {

    const updatedTasks = tasks.map(item => {
      if (_id == item.id) {
        return {...item, completed: !item.completed}
      }
      return item
    });
    setTasks(updatedTasks)
  }
  function deleteTask(_id) {
    const updatedTasks = tasks.filter(task => _id != task.id)
    setTasks(updatedTasks)
  }

  const taskList = tasks.map(item => (
    <ToDo
      key = {item.id} 
      id={item.id} 
      completed={item.completed} 
      task={item.name} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask ={deleteTask}
    />
  )
  );
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div>
      <h1>Pomodoro + Productivity App</h1>
      <Form addTask={addTask}/>
      
      <div className="filters btn-group stack-exception">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>

      <h2 id="list-heading">
        {headingText}
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>

    </div>
  );
}

export default App;
