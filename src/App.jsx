import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';


import Navbar from './pages/Navbar';
import AboutPage from './pages/AboutPage';
import FridgeServicesPage from './pages/FridgeServicesPage';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/fridgeservices",
        element: <FridgeServicesPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}