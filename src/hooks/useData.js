import React, { useEffect, useState } from "react";
import TABLE_NAMES from "../constants/constants";

const useData = (tableName = "categories") => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = () => {
    if (TABLE_NAMES.includes(tableName)) {
      // const data = getData(tableName);
      // setData(data);
    }
  };

  return [data, fetchData];
};

export default useData;
