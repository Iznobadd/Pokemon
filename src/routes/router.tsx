import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import GenerationPage from "../pages/GenerationPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import OnlyPublicRoute from "./OnlyPublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/generation/:generation",
        element: <GenerationPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
