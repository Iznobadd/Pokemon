import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const General = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return (
    <section className="p-8 border border-gray-600 rounded bg-gray-500/70">
      <h2 className="mb-4 font-bold text-2xl text-center">
        General Informations
      </h2>
      <p className="my-4">Email: {user.email}</p>
      <p className="my-4">Change my password</p>
      <p className="my-4">Delete my account</p>
    </section>
  );
};

export default General;
