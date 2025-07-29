import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;