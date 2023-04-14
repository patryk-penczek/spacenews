import '@/styles/index.css';
import ReportsPage from 'pages/ReportsPage';
import SettingsPage from 'pages/SettingsPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

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
    path: '/settings',
    element: <SettingsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
