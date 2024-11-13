import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Pokemon9 from "../pages/Pokemon9";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Pokemon9 />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
