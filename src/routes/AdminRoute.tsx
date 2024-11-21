import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const AdminRoute = () => {
  const { loading, user } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (user && user.role !== "ADMIN") return <Navigate to="/" />;
  return <Outlet />;
};

export default AdminRoute;
