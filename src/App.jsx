import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AppRouter from './router/AppRouter';
import ErrorBoundary from './components/common/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
