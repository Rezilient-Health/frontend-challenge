import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactComponent as DarkLogo } from '../src/assets/logo-dark.svg';
import './App.css';
import Layout from './components/Layout';
import ListPatients from './components/ListPatients';
import ViewPatient from './components/ViewPatient';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <DarkLogo className="logo" />
        <Routes>
          <Route path="/" element={<Navigate to="/patients" />} />
          <Route path="/patients/:id" element={<ViewPatient />} />
          <Route path="/patients" element={<ListPatients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
