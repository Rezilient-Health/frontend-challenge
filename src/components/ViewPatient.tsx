import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

// Uncomment to use the mock api calls.
// import * as api from '../misc/api';

const ViewPatient = (): ReactElement => {
  return (
    <Box>
      <h2>[View Patient Placeholder]</h2>
      <Link to={'/patients'}>[List Patient Link Example]</Link>
    </Box>
  );
};

export default ViewPatient;
