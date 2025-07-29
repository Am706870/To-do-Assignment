import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const taskData = {
      id: editTask?.id || Date.now(),
      title,
      description,
      status,
      createdAt: editTask?.createdAt || new Date().toISOString(),
    };
    onSubmit(taskData);
    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;