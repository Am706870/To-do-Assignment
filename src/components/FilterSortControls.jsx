import React from "react";

const FilterSortControls = ({ filterStatus, setFilterStatus, sortType, setSortType, onClear }) => {
  return (
    <section className="filter-sort">
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="createdAt">Sort by Date</option>
        <option value="status">Sort by Status</option>
      </select>

      <button className="clear-btn" onClick={onClear}>Clear All</button>
    </section>
  );
};

export default FilterSortControls;