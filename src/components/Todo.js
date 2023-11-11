import React, { useState } from "react";

export default function Todo({ id, task, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);
  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = (todoId) => {
    deleteTodo(todoId);
  };

  const handleChange = (event) => {
    setUpdatedTask({
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("value", event.target.value);
  };

  if (!isEditing) {
    return (
      <div style={{ display: "flex" }}>
        <li>{task}</li>
        <button onClick={toggleForm}>EDIT</button>
        <button onClick={() => handleDelete(id)}>X</button>
      </div>
    );
  }
  return (
    <form onSubmit={handleUpdate}>
      <input
        id="task"
        placeholder="New Todo"
        type="text"
        value={updatedTask}
        name="updatedTask"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}
