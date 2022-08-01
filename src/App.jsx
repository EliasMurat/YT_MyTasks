import "./App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task #001",
      completed: false,
    },
    {
      id: 2,
      title: "Task #002",
      completed: false,
    },
    {
      id: 3,
      title: "Task #003",
      completed: false,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          )}
        ></Route>
        <Route path="/:taskTitle" exact component={TaskDetails}></Route>
      </div>
    </Router>
  );
};

export default App;
