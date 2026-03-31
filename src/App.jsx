import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './component/common/Navbar';
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
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path: "/fridgeservices",
        element: <FridgeServicesPage/>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}