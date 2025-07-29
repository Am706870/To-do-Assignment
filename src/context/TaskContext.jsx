import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddOrUpdateTask = (task) => {
    if (editTask) {
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks((prev) => [...prev, { ...task, id: Date.now(), createdAt: new Date().toISOString() }]);
    }
    setEditTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  const handleClearAll = () => setTasks([]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, editTask, setEditTask, handleAddOrUpdateTask, handleDeleteTask, handleEditTask, handleClearAll }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);