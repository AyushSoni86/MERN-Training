import React, { useState } from "react";

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
    const newTodo = todos.filter((currentTodo) => {
      return todoId !== currentTodo.id;
    });
    setTodoList(newTodo);
    console.log(newTodo);
  };

  return (
    <div>
      {todoList.map((currentTodo) => {
        return (
          <div key={currentTodo.id}>
            <h6>{currentTodo.title}</h6>
            <input type="checkbox" checked={currentTodo.isCompleted} />
            <button onClick={() => deleteTodo(currentTodo.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
