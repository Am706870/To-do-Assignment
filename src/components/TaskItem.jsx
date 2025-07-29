import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <li className="todo-item fade-in">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <small>Status: {task.status}</small>
        <br />
        <small>Created At: {new Date(task.createdAt).toLocaleString()}</small>
      </div>
      <div>
        <button className="check-btn" onClick={() => onEdit(task)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
