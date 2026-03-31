import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>Navbar</h1>
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}