import React, { useState, useEffect, memo } from "react";
import "./SearchComponent.scss";

const SearchComponent = ({ searchList, searchType, head, type }) => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState(searchList);

  useEffect(() => {
    if (type === "history") {
      setList(searchList.filter(({ query }) => query.includes(searchValue)));
    } else if (type === "table") {
      setList(searchList.filter((name) => name.startsWith(searchValue)));
    }
  }, [searchValue, searchList, type]);

  return (
    <div className="table-names-container">
      <div className="head">{head}</div>
      <div className="search-bar">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search ..."
          type="text"
          className="searchbar"
        />
      </div>
      <div className="tablename-container">
        {type === "table" && (
          <ul className="table-names">
            {list.length > 0 &&
              list.map((name, idx) => (
                <li
                  key={name + idx}
                  className={`table-name ${idx % 2 === 0 ? "even" : "odd"}`}
                >
                  {name}
                </li>
              ))}
            {list.length === 0 && "Table name not found"}
          </ul>
        )}

        {type === "history" && (
          <ul className="table-names history">
            {list.length > 0 &&
              list.map(({ query, status }, idx) => (
                <li key={idx + query} className="table-name">
                  <span className={`query ${idx % 2 === 0 ? "even" : "odd"}`}>
                    {query}
                  </span>
                  <span className={`status ${status}`}>{status}</span>
                </li>
              ))}
            {list.length !== 0 && list.length === 0 && "Table name not found"}
            {list.length === 0 && "No history available"}
          </ul>
        )}
      </div>
    </div>
  );
};

export default memo(SearchComponent);
