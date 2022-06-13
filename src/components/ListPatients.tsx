import React, { ReactElement, useEffect, useState } from 'react';
import { getData } from '../data';
import { PatientsTable } from './PatientTable';

const ListPatients = (): ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data: any) => {
      setData(data);
    });
  }, []);

  return <PatientsTable />;
};

export default ListPatients;
