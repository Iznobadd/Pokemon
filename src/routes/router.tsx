import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Pokemon9 from "../pages/Pokemon9";
import Register from "../pages/Register";
import Login from "../pages/Login";
import OnlyPublicRoute from "./OnlyPublicRoute";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Pokemon9 />,
      },
      {
        element: <OnlyPublicRoute />,
        children: [
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
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/test",
            element: <div>Test</div>,
          },
        ],
      },
    ],
  },
]);
