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
      <div className="flex justify-around">
        <p className="my-4 py-4 px-8 rounded bg-yellow-500 text-gray-800">
          Change my password
        </p>
        <p className="my-4 p-4">Email: {user.email}</p>
        <p className="my-4 py-4 px-8 rounded bg-red-500 text-white">
          Delete my account
        </p>
      </div>
    </section>
  );
};

export default General;
