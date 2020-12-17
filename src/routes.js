import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import AddBookMark from './pages/add-bookmark/AddBookMark'
import MainLayout from './layouts/main-layout/MainLayout'
import NotFoundView from './errors/NotFoundView'

const routes = [
  // {
  //   path: 'app/dashboard',
  //   element: <Home />,
  //   children: [
  //     { path: 'addBookmark', element:  <Navigate to={<AddBookMark />}/> },
  //     { path: '*', element: <Navigate to="/404" /> }
  //   ]
  // },
  // {
  //   path: 'app/add-bookmark',
  //   element: <AddBookMark />
  // },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Home /> },
      { path: 'add-bookmark', element: <AddBookMark /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
