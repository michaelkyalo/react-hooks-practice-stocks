import React from 'react';

const SearchBar = ({ sortBy, setSortBy, filterType, setFilterType }) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortBy === "Alphabetically"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortBy === "Price"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        Price
      </label>

      <br />
      <strong>Filter:</strong>
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Sportswear">Sportswear</option>
      </select>
    </div>
  );
};

export default SearchBar;

