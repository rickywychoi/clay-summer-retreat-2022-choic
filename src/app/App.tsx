import React, { useEffect } from 'react';
import '../styles/app.css';
import { containerBuilder } from './app.container';
import './app.i18n';
import AppRouter from './AppRouter';
import { useLocalStorage } from './shared/localStorage/localStorage.hook';

containerBuilder();

export default function App() {
  const { setChoice } = useLocalStorage();
  useEffect(() => {
    setChoice();
  }, [setChoice]);

  return (
    <div>
      <AppRouter />
    </div>
  );
}
