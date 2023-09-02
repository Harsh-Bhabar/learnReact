import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  // toggle add task form
  const [showAddTask, setShowAddTask] = useState(false);

  // useEffect
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks from Db
  const fetchTasks = async () => {
    const result = await fetch("http://localhost:5000/tasks", {
      credentials: 'include'
    });
    const data = await result.json();
    console.log(data);
    return data;
  };

  // add task
  const addTask = async (task) => {
    try {
      const res = await fetch(`http://localhost:5000/tasks`, {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!res.ok) {
        throw new Error("Failed to add task"); // Handle non-successful HTTP responses
      }
      const data = await res.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.error("Error adding task:", error);
      // You can add additional error handling here, such as displaying an error message to the user.
    }

    // console.log(task);
    // task.id = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1; // since we're using server it'll be done
    // setTasks([...tasks, task]);
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // to delete a task
  const deleteFunc = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        credentials: 'include',
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error('Failed to delete task'); // Handle non-successful HTTP responses
      }

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      // You can add additional error handling here, such as displaying an error message to the user.
    }
  };


  return (
    <div className="container">
      <Header
        title="myTodoApp"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAddTask={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteFunc} onToggle={toggleReminder} />
      <Footer />
    </div>
  );
}

export default App;
