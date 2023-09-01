import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos, deleteTodoItem }) {
  // Map over the todos array and render each todo as a TodoItem
  //   const todoItems = todos.map((todo, index) => (
  //     <TodoItem key={index} itemKey={todo.sno} todo={todo} deleteTodoItem={deleteTodoItem} />
  //   ));

  const todosStyle = {
    minHeight : "35vh"
  }

  return (
    <div className="container" style={todosStyle}>
  { /*console.log("todos in todos.js - ", typeof(todos), todos) */}
      <h3 className="todosList">Todos list</h3>

      {/* todoItems  */}

      {todos.length === 0
        ? ("All set, youre free")
        : todos.map((todo) => {
            return (
              <TodoItem
                key={todo.sno}
                todo={todo}
                itemKey={todo.sno}
                deleteTodoItem={deleteTodoItem}
              />
            );
          })}
    </div>
  );
}
