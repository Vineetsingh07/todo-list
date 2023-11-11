import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewTodoForm({ createTodo }) {
  const [formData, setFormData] = useState({ task: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({ ...formData, id: uuidv4() });
    console.log("formData", formData.task);
    setFormData({ task: "" });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>NewTodoForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task"> New Todo</label>

        <input
          id="task"
          required
          placeholder="New Todo"
          type="text"
          value={formData.task}
          name="task"
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
