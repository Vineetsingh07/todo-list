import React, { useState } from "react";

export default function NewTodoForm() {
  const [formData, setFormData] = useState({
    task:""
  });
  return (
    <div>
      <h1>NewTodoForm</h1>
      <form>
        <label htmlFor="task"> New Todo</label>
        <input placeholder="New Todo" id="task" type="text" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
