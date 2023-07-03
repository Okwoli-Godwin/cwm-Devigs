import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homelayout/HomeLayout";
import HomeScreen from "../pages/landingpage/HomeScreen";
import Error from "../pages/ErrorPage(404)/Error";

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
    path:"*",
    element: <Error/>,
  },
]);
