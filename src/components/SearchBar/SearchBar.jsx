import React, { useRef } from "react";
import "./SearchBar.scss";

export default function SearchBar({ search, setSearch }) {
  const inputRef = useRef();

  return (
    <div className="search">
      <div className="search__input-bar">
        <i
          onClick={() => inputRef.current.focus()}
          className="fa fa-search search__icon"
        ></i>
        <input
          type="text"
          placeholder="Search"
          className="search__input"
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
