import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TodoApp from "./components/TodoApp";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <TodoApp />
    </TaskProvider>
  );
};

export default App;