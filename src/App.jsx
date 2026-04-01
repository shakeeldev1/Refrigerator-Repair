import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FridgeServicesPage from './pages/FridgeServicesPage';
import Dishwasherpage from './pages/Dishwasherpage';
import WashineMachinePage from './pages/WashineMachinePage';
import GasCooker from './pages/GasCooker';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
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
      {
        path: "/dishwasherservice",
        element: <Dishwasherpage/>,
      },
      {
        path: "/washing-machineservice",
        element: <WashineMachinePage/>,
      },
      {
        path: "/gas-cookerservice",
        element: <GasCooker/>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}