import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import DashboardLayout from 'src/layouts/DashboardLayout';
import DashboardView from 'src/views/dashboard/DashboardView';
import NotFoundView from 'src/views/errors/NotFoundView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
