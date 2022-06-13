import * as api from './mocks/api';

export async function getData() {
  try {
    const data = await api.getPatients();
    return data;
  } catch {
    return null;
  }
}
