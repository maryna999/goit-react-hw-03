import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.search}>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          name="find"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
