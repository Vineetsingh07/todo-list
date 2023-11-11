import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newtTodo) => {
    console.log("newtTodo", newtTodo);
    setTodos([...todos, newtTodo]);
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <div>
      <NewTodoForm createTodo={createTodo} />
      <h1>TodoList</h1>

      <ul>
        {todos.map((todo) => (
          <Todo task={todo.task} id={todo.id} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
