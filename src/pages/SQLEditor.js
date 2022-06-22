import React, { useEffect, useState, memo } from "react";
import Editor from "../components/Editor";
import ResultSection from "../components/ResultSection";
import SideNavbar from "../components/SideNavbar";
import { fetchData } from "../helpers/helpers";
import "./SQLEditor.scss";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import SearchComponent from "../components/SearchComponent";
import TABLE_NAMES from "../constants/constants";

const SQLEditor = () => {
  const [tableName, setTableName] = useState("Customers");
  const [query, setQuery] = useState("SELECT * FROM Customers");
  const [result, setResult] = useState("");
  const [resultIsLoading, setResultIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Function to get Table name out of the query String
  const getTableName = (items) => {
    const idx = items.indexOf("FROM");
    if (idx !== -1) {
      const tableName = items[idx + 1].replace(";", "");
      setTableName(tableName);
      return tableName;
    }
  };

  const executeQuery = (query) => {
    console.log("FROM EXECUTE QUERY : ", query);
    if (query === "") {
      toast.custom(
        <div className="customToast">Please enter a query to execute</div>
      );
      setResultIsLoading(false);
    } else if (query.split(" ").length > 3 && query.split(" ")[3].length > 0) {
      setResultIsLoading(true);
      const items = query.split(" ");
      if (items[0].toLowerCase() === "select") {
        const table = getTableName(items);
        fetchData(
          table.toLowerCase(),
          setResult,
          setResultIsLoading,
          setHistory,
          query
        );
      } else {
        toast.error("Sorry! SELECT queries are only supported for now.");
        setResultIsLoading(false);
      }
    } else {
      toast.error("Sorry! Something is wrong with your query");
      setResultIsLoading(false);
    }
  };

  useEffect(() => {
    if (query === "") {
      setResult("");
    }
  }, [query]);

  return (
    <div className="sql-editor">
      <Toaster />
      <SideNavbar />
      <div className="container">
        <div className="col1">
          <div className="editor-section section">
            <Editor
              setQuery={setQuery}
              query={query}
              executeQuery={executeQuery}
            />
          </div>
          <div className="result-section section">
            <ResultSection
              tableName={tableName}
              result={result}
              resultIsLoading={resultIsLoading}
            />
          </div>
        </div>
        <div className="col2">
          <div className="available-tables-section section">
            {/* <AvailableTables /> */}
            <SearchComponent
              searchList={TABLE_NAMES}
              head={"Available Tables"}
              type={"table"}
            />
          </div>
          <div className="history-section section">
            {/* <HistoryTable history={history} /> */}
            <SearchComponent
              searchList={history}
              head={"History"}
              type={"history"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SQLEditor);
