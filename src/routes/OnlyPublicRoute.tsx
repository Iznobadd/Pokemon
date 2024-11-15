import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const OnlyPublicRoute = () => {
  const { token, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default OnlyPublicRoute;
