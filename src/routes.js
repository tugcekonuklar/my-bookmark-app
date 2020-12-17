import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import AddBookMark from './pages/add-bookmark/AddBookMark'
import MainLayout from './layouts/main-layout/MainLayout'
import DashBoardLayout from './layouts/dashboard-layout/DashBoardLayout'
import NotFoundView from './errors/NotFoundView'

const routes = [
  {
    path: 'app',
    element: <DashBoardLayout />,
    children: [
      { path: 'home', element: <Home />},
      { path: 'addBookmark', element: <AddBookMark /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app" />},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
