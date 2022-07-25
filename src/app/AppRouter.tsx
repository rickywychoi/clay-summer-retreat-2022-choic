import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './layout';
import Container from '@mui/material/Container';
import Landing from './pages/Landing/Landing';
import './main.css';
import ResetPage from './pages/Reset/Reset';
import Choice from './pages/Choice/Choice';
import FinalSummary from './pages/FinalSummary.tsx/FinalSummary';
import { routes } from './shared/routes';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          <Route path="/" element={WithStyle(Landing)} />\
          <Route path={routes.MakeChoice} element={WithStyle(Choice)} />
          <Route path={routes.StartOver} element={WithStyle(ResetPage)} />
          <Route path={routes.TheEnd} element={WithStyle(FinalSummary)} />
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
