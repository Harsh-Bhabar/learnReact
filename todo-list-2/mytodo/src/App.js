import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react';
import GenerateBtn from "./Components/OT./GenerateBtn";
import Top from "./Components/OT./Top";
import CharLen from "./Components/OT./CharLen";
import CheckBoxesLine from "./Components/OT./CheckBoxesLine";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Harsh",
      desc: "Nice boy",
      reminder: true
    },
    {
      id: 2,
      name: "Ayush",
      desc: "Nice boy",
      reminder: true
    },
    {
      id: 3,
      name: "Mrinal",
      desc: "Nice boy",
      reminder: true
    },
    {
      id: 4,
      name: "Pankaj",
      desc: "Nice boy",
      reminder: true
    },
  ]);

  const deleteFunc = (id) => {
    console.log("delete clicked.", id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header title = "myTodoApp" />
      <Tasks tasks = {tasks} onDelete={deleteFunc} />
      <Footer />
    </div>
  );
}

export default App;
