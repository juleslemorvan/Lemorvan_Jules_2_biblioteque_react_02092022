import React from "react";
import { GroupeColumns } from "./Columns";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SortingTable = () => {
  const allEmployee = useSelector((state) => state.employees.allEmployees);

  const columns = useMemo(() => GroupeColumns, []);
  const data = useMemo(() => allEmployee, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

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
              <th
                className="text-lg p-4 border-2 "
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                <span className="flex justify-center items-center">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleUp />
                    )
                  ) : (
                    ""
                  )}
                </span>
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

export default SortingTable;
