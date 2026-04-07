import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FridgeServicesPage from './pages/FridgeServicesPage';
import Dishwasherpage from './pages/Dishwasherpage';
import WashineMachinePage from './pages/WashineMachinePage';
import GasCooker from './pages/GasCooker';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import Home from './pages/Home';
import ContactUs from './component/home/ContactUs';
import Blogs from './pages/Blogs';
import BlogDetail from './component/Blogs/BlogDetail';
import ScrollToTop from './pages/ScrollToTop';
import GasStovePage from './pages/GasStovePage';
import ConnectionPage from './pages/ConnectionPage';
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <ConnectionPage />
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
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetail/>,
      },
      {
        path: "/electric-stoveservice",
        element: <GasStovePage/>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}