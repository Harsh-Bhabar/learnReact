import React from "react";

export default function TodoItem({itemKey, todo, deleteTodoItem}) {

  return (
    <div>
      {console.log(itemKey, todo, deleteTodoItem)}

      <p>Sno: {todo.sno}</p>
      <p>Name: {todo.name}</p>
      <p>Description: {todo.desc}</p>

      <button className="btn btn-sm btn-success">Add</button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          deleteTodoItem(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}
