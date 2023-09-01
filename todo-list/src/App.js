import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import TodoItem from './Components/TodoItem';

function App() {

  let todos = [
    {
      sno: 1,
      name: "Harsh",
      desc: "LOlol",
    },
    {
      sno: 2,
      name: "Ayush",
      desc: "LOlol2",
    },
    {
      sno: 3,
      name: "Mrinal",
      desc: "LOlol3",
    }
  ];

  return (
    <div>
      <Header title="myTodoList" />
      <Todos todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
