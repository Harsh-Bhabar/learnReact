import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos }) {
  // delete totoitem
  const deleteTodoItem = (todo) => {
    console.log("on delete for ", todo);
  };

  // Map over the todos array and render each todo as a TodoItem
//   const todoItems = todos.map((todo, index) => (
//     <TodoItem key={index} itemKey={todo.sno} todo={todo} deleteTodoItem={deleteTodoItem} />
//   ));

  return (
    <div className="container">
      {console.log(todos)}
      <h3 className="todosList">Todos list</h3>

      {/* todoItems  */}

      {todos.map((todo) => {
        return <TodoItem key={todo.sno} todo={todo} itemKey={todo.sno} deleteTodoItem={deleteTodoItem} />;
      })}
    </div>
  );
}
