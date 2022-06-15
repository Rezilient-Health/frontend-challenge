import { createStyles, makeStyles } from '@mui/styles';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLUMNS } from '../columns';
import { getData } from '../data';
import './patient-table.css';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: {
      display: 'flex',
      minWidth: 'fit-content',
      minHeight: 600,
      height: 400,
    },
    root: {
      border: '1px solid',
      borderColor: '#001D3F',
      color: '#001D3F',
    },
  })
);

// A component that makes a table with the patients':
// id, first name, last name, email, sex, and creation date

// The table is filterable, sortable, and can change how many
// Entries per page are viewed.
// Each entry is clickable and leads to detailed patient view.
export const PatientsTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getData().then((data: any) => {
      setData(data);
    });
  }, []);

  const navigate = useNavigate();

  if (!data) return null;

  return (
    <div className={classes.container}>
      <DataGrid
        className={classes.root}
        rows={data}
        columns={columns}
        onCellClick={(row: any) => navigate(`/patients/${row.id}`)}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};
