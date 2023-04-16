import '@/styles/index.css';
import InfoPage from 'pages/InfoPage';
import ReportsPage from 'pages/ReportsPage';
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
    path: '/info',
    element: <InfoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
