import * as api from './mocks/api';

// This helper function fetches  the data of the patients.
export async function getData() {
  try {
    const data = await api.getPatients();
    return data;
  } catch {
    return null;
  }
}
