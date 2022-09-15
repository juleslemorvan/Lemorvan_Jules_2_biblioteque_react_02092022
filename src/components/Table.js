import React from "react";
import Columns from "./Columns";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useTable } from "react-table";

const Table = () => {
  const allEmployee = useSelector((state) => state.employees.allEmployees);

  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => allEmployee, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      className="border-collapse shadow-lg border-2 border-slate-300"
      {...getTableProps()}
    >
      <thead className="bg-gray-900 text-white text-left">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="text-lg p-4 border-2" {...column.getHeaderProps()}>
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
                  <td className="text-lg p-4 border-2" {...cell.getCellProps()}>
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
};

export default Table;
