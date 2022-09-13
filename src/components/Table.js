import React from "react";

import { useSelector } from "react-redux";

const Table = () => {
  const allEmployee = useSelector((state) => state.employees.allEmployees);

  const clefs = allEmployee.map((employe) => {
    return Object.keys(employe);
  });
  console.log(clefs);
  const columns = clefs.map((clef) => {
    console.log(clef);
  });

  console.log(columns);

  return (
    <table className="border-collapse min-w-[600px]">
      <thead>
        <tr>{columns[2]}</tr>
      </thead>
      <tbody>
        <tr>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
          <td>CONTENUE</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

// const Table = () => {
//   const employeeInfos = useSelector((state) => state.employees);

//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => employeeInfos, [employeeInfos]);

//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
