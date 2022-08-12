import React, { useEffect, useMemo } from 'react';
import '../styles/app.css';
import { containerBuilder } from './app.container';
import './app.i18n';
import AppRouter from './AppRouter';
import { useLocalStorage } from './shared/localStorage/localStorage.hook';

containerBuilder();

export default function App() {
  const { getResetLocalStorage, resetEverything, setResetLocalStorage } = useLocalStorage();
  const hadResetLocalStorage = useMemo(() => getResetLocalStorage(), [getResetLocalStorage]);

  useEffect(() => {
    const appStartDate = new Date(2022, 7, 15); // Aug 15 - javascript has month 0 index based
    const now = new Date();

    const beforeStart = now < appStartDate;
    const afterStart = now >= appStartDate;

    if (beforeStart) {
      setResetLocalStorage(false);
    }
    if (!hadResetLocalStorage && afterStart) {
      resetEverything();
      setResetLocalStorage(true);
    }
  }, [hadResetLocalStorage, resetEverything, setResetLocalStorage]);

  return (
    <div>
      <AppRouter />
    </div>
  );
}
