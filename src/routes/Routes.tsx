import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/Layout/Homelayout";
import Homescreen from "../pages/Homescreen";

export const main = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children: [
            {
            index: true,
            element: <Homescreen />
            }
        ]
    }
])