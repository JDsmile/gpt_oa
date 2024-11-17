You’re given a React app that manages a list of tasks. The app has three main functionalities:

Adding a new task.
Marking a task as complete or incomplete.
Deleting a task.
However, there are two issues:

The "Mark as Complete" functionality is not working correctly.
The app does not have a "Clear All Completed Tasks" button, which is a feature users have requested.
Your job is to:

Fix the "Mark as Complete" functionality.
Implement the "Clear All Completed Tasks" feature.

import React, { useState } from "react";

const TaskApp = () => {
const [tasks, setTasks] = useState([
{ id: 1, text: "Learn React", completed: false },
{ id: 2, text: "Build a To-Do App", completed: false },
]);
const [newTask, setNewTask] = useState("");

const handleAddTask = () => {
if (newTask.trim()) {
setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
setNewTask("");
}
};

const handleToggleComplete = (id) => {
// BUG: Marking tasks as complete doesn't work.
const updatedTasks = tasks.map((task) => {
if (task.id === id) {
task.completed = !task.completed; // This mutates the state directly
}
return task;
});
setTasks(updatedTasks); // State doesn't update properly
};

const handleDeleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id));
};

return (
<div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
<h1>Task Manager</h1>
<input
type="text"
placeholder="New Task"
value={newTask}
onChange={(e) => setNewTask(e.target.value)}
/>
<button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Feature: Clear All Completed Tasks */}
      <button style={{ marginTop: "20px" }}>Clear Completed</button>
    </div>

);
};

export default TaskApp;
