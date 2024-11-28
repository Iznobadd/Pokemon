import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import Modal from "../Modal";
import ChangePassword from "./ChangePassword";

const General = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return (
    <section className="p-8 border border-gray-600 rounded bg-gray-500/70">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ChangePassword onSuccess={() => setIsOpen(false)} />
      </Modal>
      <h2 className="mb-4 font-bold text-2xl text-center">
        General Informations
      </h2>
      <div className="flex justify-around">
        <p
          className="my-4 py-4 px-8 rounded bg-yellow-500 text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
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
