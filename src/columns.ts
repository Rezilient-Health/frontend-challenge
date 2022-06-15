import { date, sex } from './util';

// COLUMNS is responsible for formatting the columns, setting the corret
// headers and getting the identifiers.
export const COLUMNS = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    width: 200,
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'sex',
    headerName: 'Sex',
    width: 100,
    renderCell: (cellValues: any) => {
      return sex(cellValues.value);
    },
  },
  {
    field: 'created_at',
    headerName: 'Creation Date',
    width: 200,
    renderCell: (cellValues: any) => {
      return date(cellValues.value);
    },
  },
];
