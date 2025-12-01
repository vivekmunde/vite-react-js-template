import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nProvider } from './components/i18n-provider';
import './index.css';
import { Router } from './routes/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <Router />
    </I18nProvider>
  </StrictMode>
);
