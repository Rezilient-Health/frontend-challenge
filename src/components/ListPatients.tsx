import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

// Uncomment to use the mock api calls.
// import * as api from '../misc/api';

const ListPatients = (): ReactElement => {
  return (
    <Box>
      <h2>[List Patient Placeholder]</h2>
      <Link to={'/patients/1'}>[View Patients Link Example]</Link>
    </Box>
  );
};

export default ListPatients;
