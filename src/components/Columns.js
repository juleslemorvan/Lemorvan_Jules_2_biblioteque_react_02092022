import { format, formatISO } from "date-fns";

export const GroupeColumns = [
  {
    Header: "id",
    accessor: "ID",
  },
  {
    Header: "name",
    columns: [
      {
        Header: "First name",
        accessor: "prénom",
      },
      {
        Header: "Last Name",
        accessor: "nom",
      },
    ],
  },

  {
    Header: "Infos",
    columns: [
      {
        Header: "BirthDay",
        accessor: (row) => formatISO(new Date(row.birth)),
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Date of Start",
        accessor: (row) => formatISO(new Date(row.départ)),
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Street",
        accessor: "rue",
      },
      {
        Header: "City",
        accessor: "ville",
      },
      {
        Header: "State",
        accessor: "etat",
      },
      {
        Header: "Zipcode",
        accessor: "zip",
      },
      {
        Header: "Department",
        accessor: "departement",
      },
    ],
  },
];
