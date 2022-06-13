import styled from '@emotion/styled';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ListPatients from './components/ListPatients';
import ViewPatient from './components/ViewPatient';

const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/patients" />} />
          <Route path="/patients/:id" element={<ViewPatient />} />
          <Route path="/patients" element={<ListPatients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
