import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="p-4 flex items-center justify-end">
      <span className="pr-2 "> Search : </span>

      <input
        className=" p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        type="text"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default GlobalFilter;
