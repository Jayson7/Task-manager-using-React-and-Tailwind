import React from "react";

function FilterTasks({ setFilter }) {
  return (
    <div className="mb-8 flex space-x-4">
      <button
        onClick={() => setFilter("all")}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Pending
      </button>
    </div>
  );
}

export default FilterTasks;
