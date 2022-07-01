// Please do not change anything in this file!
import patients from "./data.json";
import { Patient } from "./types";

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getPatients = async (): Promise<Array<Patient>> => {
  await delay(1500);
  return patients;
};

const getPatient = async (id: number): Promise<Patient> => {
  await delay(1000);
  return patients.filter((p: any) => p.id === id)[0];
};

export { getPatients, getPatient };
