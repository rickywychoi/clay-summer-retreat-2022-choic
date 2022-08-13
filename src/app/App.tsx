import React, { useEffect, useMemo } from 'react';
import '../styles/app.css';
import { containerBuilder } from './app.container';
import './app.i18n';
import AppRouter from './AppRouter';
import { startDate } from './core/binaryTree/tree';
import { useLocalStorage } from './shared/localStorage/localStorage.hook';

containerBuilder();

export default function App() {
  const { getResetLocalStorage, resetEverything, setResetLocalStorage } = useLocalStorage();
  const hadResetLocalStorage = useMemo(() => getResetLocalStorage(), [getResetLocalStorage]);

  useEffect(() => {
    const now = new Date();

    const beforeStart = now < startDate;
    const afterStart = now >= startDate;

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
