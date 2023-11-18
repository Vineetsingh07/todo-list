import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    // componentDidMount()
    const localDbTodoList = JSON.parse(localStorage.getItem("todo-list"));
    console.log("localDbTodoList", localDbTodoList);
    if (localDbTodoList) {
      setTodos(localDbTodoList);
      return;
    }
    setTodos([]);
  }, []);

  const createTodo = (newtTodo) => {
    setTodos([...todos, newtTodo]);
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // here we are looking fr the id we are passing her from Todo component
        return { ...todo, task: updatedTask };
      }
      // here when id does not match we return the same to do list.
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <NewTodoForm createTodo={createTodo} />
      <h1>TodoList</h1>

      <ul>
        {todos.map((todo) => (
          <Todo
            task={todo.task}
            id={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
