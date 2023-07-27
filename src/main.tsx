import '@/styles/index.css';
import InfoPage from 'pages/InfoPage';
import NotFound from 'pages/NotFound';
import ReportsPage from 'pages/ReportsPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThemeProvider from 'contexts/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/reports',
    element: <ReportsPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
