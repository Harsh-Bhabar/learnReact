import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddToDo from "./Components/AddToDo";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  let localTodoList = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(localTodoList);

  // add a todo item
  const addInTodoList = (title, desc) => {
    const newSno = todos[todos.length - 1]
      ? todos[todos.length - 1].sno + 1
      : 1;
    const newTodo = {
      sno: newSno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
  };

  // delete totoitem
  const deleteTodoItem = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Retrieve todos from local storage when the component mounts
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(localTodos);
  }, []);

  return (
    <div>
      <Router>
        <Header title="myTodoList" />
        <Routes>
          <Route
             exact path="/"
            element={
              <div>
                <AddToDo addInTodoList={addInTodoList} />
                <Todos todos={todos} deleteTodoItem={deleteTodoItem} />
              </div>
            }
          ></Route>

          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
