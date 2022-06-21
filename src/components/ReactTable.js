import React, { memo, useMemo } from "react";
import { useTable } from "react-table";

function ReactTable({ columnsArray, data }) {
  const columns = useMemo(
    () =>
      columnsArray.map((col, idx) => ({
        Header: col,
        accessor: `${idx}`
      })),
    [columnsArray]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table
      className="result-table"
      {...getTableProps()}
      style={{ borderSpacing: "0px" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 0.2px #d1d5db",
                  background: "#0EA5E9",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "15px 8px",
                  textAlign: "left"
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      fontSize: "14px",
                      padding: "10px 8px",
                      borderBottom: "solid 0.2px #d1d5db",
                      background: "#f9fafb"
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(ReactTable);
