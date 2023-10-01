import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import { Root } from './components/Root';
import { Login } from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    basename: '/react-auth-basic-with-firebase/',
    children: [{
      path: '/',
      element: <Login/>
    }]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
