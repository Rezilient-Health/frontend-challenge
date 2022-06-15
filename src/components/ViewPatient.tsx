import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../data';
import { date, patientName, sex } from '../util';

const useStyles = makeStyles(() =>
  createStyles({
    // Styles the header
    header: {
      fontSize: '14',
      color: 'gray',
    },
    // Styles the text
    text: {
      fontSize: '18',
      color: '#001D3F',
      marginBottom: 5,
    },
    // Manages the container that has the card
    container: {
      minWidth: 400,
      maxWidth: 'fit-content',
      margin: 'auto',
    },
    // Manages the card and styles it
    cardContainer: {
      backgroundColor: '#BFD7EA',
    },
  })
);

const ViewPatient = (): ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data: any) => {
      setData(data);
    });
  }, []);

  const url = window.location.href;
  const splitUrl: string[] = url.split('/');
  const id: number = parseInt(splitUrl[splitUrl.length - 1]);
  const patient: any = data[id - 1];
  const classes = useStyles();

  if (data.length == 0) return <div></div>;

  // Creates a card with the patient's information
  // Calls helper functions to format the sex, name, and dates.
  const card = (
    <React.Fragment>
      <CardActions>
        <Button size="small">
          <Link to={'/patients'}>Go back to Patient List</Link>
        </Button>
      </CardActions>

      <CardContent>
        <Typography className={classes.header}>Patient</Typography>
        <Typography className={classes.text}>
          {patientName(patient.first_name, patient.last_name)}
        </Typography>

        <Typography className={classes.header}>Sex</Typography>
        <Typography className={classes.text}>{sex(patient.sex)}</Typography>

        <Typography className={classes.header}>Email</Typography>
        <Typography className={classes.text}>
          <a href={`mailto:${patient.email}`}>{patient.email}</a>
        </Typography>

        <Typography className={classes.header}>Created at:</Typography>
        <Typography className={classes.text}>
          {date(patient.created_at)}
        </Typography>

        <Typography className={classes.header}>Updated at:</Typography>
        <Typography className={classes.text}>
          {date(patient.updated_at)}
        </Typography>
      </CardContent>
    </React.Fragment>
  ) || <div></div>;

  return (
    <Box className={classes.container}>
      <Card variant="outlined" className={classes.cardContainer}>
        {card}
      </Card>
    </Box>
  );
};

export default ViewPatient;
