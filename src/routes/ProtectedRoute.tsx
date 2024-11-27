import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = () => {
  const { token, loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  return !token ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
