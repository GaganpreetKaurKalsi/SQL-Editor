import TABLE_NAMES from "../constants/constants";
import alasql from "alasql";
import toast from "react-hot-toast";

const getURL = (tableName) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${tableName}.csv`;

const convertToJSON = async (decodedData) => {
  try {
    const data = await alasql.promise(
      "SELECT * FROM CSV(?, {headers: false, separator:','})",
      [decodedData]
    );
    toast.success("Query executed successfully");
    return { data: data, status: "success" };
  } catch (e) {
    toast.success(
      "Oh No! We can't understand your query. Would you mind checking it."
    );
    return { data: "", status: "error" };
  }
};

const fetchData = (
  tableName,
  setResult,
  setResultIsLoading,
  setHistory,
  query
) => {
  if (TABLE_NAMES.includes(tableName)) {
    const storedData = localStorage.getItem("northwind-data-csv");
    const object = JSON.parse(storedData);

    if (object === null || object[tableName] === undefined) {
      fetch(getURL(tableName), {
        headers: {
          Accept: "application/vnd.github.v4+raw"
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            toast.error("Oh! We might have consumed all the free API calls");
            setResultIsLoading(false);
          }
        })
        .then((data) => {
          const incodedData = data.content.replace("\n", "");
          const localdata = localStorage.getItem("northwind-data-csv");
          const object = JSON.parse(localdata);
          if (object !== null) {
            object[tableName] = incodedData;
            localStorage.setItem("northwind-data-csv", JSON.stringify(object));
          } else {
            const newObject = {};
            newObject[tableName] = incodedData;
            localStorage.setItem(
              "northwind-data-csv",
              JSON.stringify(newObject)
            );
          }
          convertToJSON(atob(incodedData)).then(({ data, status }) => {
            setResult(data);
            setResultIsLoading(false);
            setHistory((prev) => [{ query: query, status: status }, ...prev]);
          });
        })
        .catch((err) => {
          toast.error(`Error occured : ${err.message}`);
          setResultIsLoading(false);
        });
    } else {
      const localdata = localStorage.getItem("northwind-data-csv");
      const object = JSON.parse(localdata);

      convertToJSON(atob(object[tableName])).then(({ data, status }) => {
        setResult(data);
        setTimeout(() => {
          setResultIsLoading(false);
        }, 1000);
        setHistory((prev) => [{ query: query, status: status }, ...prev]);
      });
    }
  } else {
    toast.error("Sorry! We don't have any table by that name");
    setResultIsLoading(false);
  }
};

export { fetchData };
