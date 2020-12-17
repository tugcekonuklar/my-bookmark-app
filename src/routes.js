import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import AddBookMark from './pages/add-bookmark/AddBookMark'

const routes = [
  {
    path: 'app',
    element: <Home />,
    children: [
      { path: 'addBookmark', element: <AddBookMark /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'app/add-bookmark',
    element: <AddBookMark />
  }
];

export default routes;
