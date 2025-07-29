import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FilterSortControls from "./FilterSortControls";
import { useTask } from "../context/TaskContext";

const TodoApp = () => {
  const { tasks, handleDeleteTask, handleEditTask, handleAddOrUpdateTask, handleClearAll, editTask } = useTask();
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortType, setSortType] = useState("createdAt");

  const filteredTasks = tasks
    .filter((task) => (filterStatus === "All" ? true : task.status === filterStatus))
    .sort((a, b) => {
      return sortType === "createdAt"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : a.status.localeCompare(b.status);
    });

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <TaskForm onSubmit={handleAddOrUpdateTask} editTask={editTask} />
      <FilterSortControls
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortType={sortType}
        setSortType={setSortType}
        onClear={handleClearAll}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </section>
  );
};

export default TodoApp;
