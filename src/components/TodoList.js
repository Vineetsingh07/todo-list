import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  //   const [todos, setTodos] = useState([
  //     { id: 1, task: "Reading the book" },
  //     { id: 2, task: "feed the dog" },
  //     { id: 3, task: "play badminton" },
  //   ]);

  const todos = [
    { id: 1, task: "Reading the book" },
    { id: 2, task: "feed the dog" },
    { id: 3, task: "play badminton" },
  ];
  return (
    <div>
      <NewTodoForm />
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <Todo task={todo.task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
