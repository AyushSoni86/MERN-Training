import React, { useState } from "react";
import "./TodoList.css";

const ToDoList = () => {
  const currentTodo = {
    id: 0,
    title: "buy some groceries",
    isCompleted: false,
  };

  const todos = [
    {
      id: 0,
      title: "buy some groceries",
      isCompleted: false,
    },
    {
      id: 1,
      title: "go to gym",
      isCompleted: true,
    },
    {
      id: 2,
      title: "study react",
      isCompleted: false,
    },
    {
      id: 3,
      title: "study backend",
      isCompleted: true,
    },
  ];

  const [todoList, setTodoList] = useState(todos);

  const deleteTodo = (todoId) => {
    console.log(todoId);
    // const newTodo = todos.filter((currentTodo) => {
    //   return todoId !== currentTodo.id;
    // });
    // setTodoList(newTodo);
    setTodoList((previous) => {
      return previous.filter((currentTodo) => {
        return todoId !== currentTodo.id;
      });
    });

    // console.log(newTodo);
  };

  return (
    <div className="todo-container">
      {todoList.map((currentTodo) => (
        <div className="todo-item" key={currentTodo.id}>
          <p style={{ color: "black" }}>{currentTodo.id}.</p>
          <h6 className="todo-title">{currentTodo.title}</h6>
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={currentTodo.isCompleted}
            readOnly
          />
          <button
            className="todo-delete"
            onClick={() => deleteTodo(currentTodo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
