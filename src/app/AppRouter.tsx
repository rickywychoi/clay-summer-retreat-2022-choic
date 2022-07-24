import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './layout';
import Container from '@mui/material/Container';
import Landing from './pages/Landing/Landing';
import './main.css';
import ResetPage from './pages/Reset/Reset';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          <Route path="/" element={WithStyle(Landing)} />
          <Route path="/StartOver" element={WithStyle(ResetPage)} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

const WithStyle = (WrappedComponent: React.FunctionComponent) => {
  return (
    <Container maxWidth="xl">
      <div className="main">
        <WrappedComponent />
      </div>
    </Container>
  );
};
