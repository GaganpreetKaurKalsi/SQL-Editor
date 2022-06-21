import React, { useState, useEffect, memo } from "react";
import "./AvailableTables.scss";

const HistoryTable = ({ history }) => {
  const [searchValue, setSearchValue] = useState("");
  const [tableList, setTableList] = useState(history);

  useEffect(() => {
    const newList = history.filter(({ query }) => query.includes(searchValue));
    setTableList(newList);
  }, [searchValue, history]);

  return (
    <div className="table-names-container">
      <div className="head">Query History</div>
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
        <ul className="table-names history">
          {tableList.length > 0 &&
            tableList.map(({ query, status }, idx) => (
              <li key={idx + query} className="table-name">
                <span className={`query ${idx % 2 === 0 ? "even" : "odd"}`}>
                  {query}
                </span>
                <span className={`status ${status}`}>{status}</span>
              </li>
            ))}
          {history.length !== 0 &&
            tableList.length === 0 &&
            "Table name not found"}
          {history.length === 0 && "No history available"}
        </ul>
      </div>
    </div>
  );
};

export default memo(HistoryTable);
