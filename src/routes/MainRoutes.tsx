import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homelayout/HomeLayout";
import HomeScreen from "../pages/landingpage/HomeScreen";
import { DashboardLayout } from "../components";
import { DashboardHome } from "../pages";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
]);
