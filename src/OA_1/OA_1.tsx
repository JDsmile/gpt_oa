import { useState } from "react";

const OA_1 = () => {
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

  const handleToggleComplete = (id: number) => {
    // BUG: Marking tasks as complete doesn't work.
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleRemoveCompletedTasks = () => {
    const newList = tasks.filter((task) => !task.completed);
    setTasks(newList);
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
      <button
        style={{ marginTop: "20px" }}
        onClick={handleRemoveCompletedTasks}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default OA_1;
