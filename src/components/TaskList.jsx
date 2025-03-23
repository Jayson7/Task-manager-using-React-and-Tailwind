import React from "react";

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span
              className={`text-lg ${
                task.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.text}
            </span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                const newText = prompt("Edit task:", task.text);
                if (newText) editTask(task.id, newText);
              }}
              className="text-indigo-600 hover:text-indigo-900"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 hover:text-red-900"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
