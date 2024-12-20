import Loading from "../../Loading";
import { useAllUsers } from "../../../services/user/queries";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import AdminModal from "../AdminModal";
import { useState } from "react";
import { useDeleteUser } from "../../../services/user/mutations";

const UserTable = () => {
  const allUsers = useAllUsers();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const deleteUser = useDeleteUser();

  const handleDeleteUser = () => {
    if (selectedUser) {
      deleteUser.mutate(selectedUser, {
        onSuccess: () => {
          setIsOpen(false);
          setSelectedUser(null);
        },
      });
    }
  };

  return (
    <div className="rounded-sm border bg-white pt-6 shadow-md px-8 pb-1">
      <h4 className="font-bold text-2xl text-gray-800 mb-6">
        Utilisateurs inscrits
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-100">
          <div className="p-5">
            <h5 className="text-md font-medium uppercase text-gray-600">ID</h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              Email
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              Date d'inscription
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              Role
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              ACTIONS
            </h5>
          </div>
        </div>

        {allUsers.isLoading ? (
          <Loading />
        ) : (
          allUsers.data?.map((user) => (
            <div key={user._id}>
              <div className="grid grid-cols-5 border-b border-gray-100">
                <div className="flex items-center justify-start p-5">
                  <p className="text-md font-medium text-gray-800">
                    {user._id}
                  </p>
                </div>
                <div className="flex items-center justify-center p-5">
                  <p className="text-md font-medium text-gray-800">
                    {user.email}
                  </p>
                </div>
                <div className="flex items-center justify-center p-5">
                  <p className="text-md font-medium text-gray-800">
                    {new Intl.DateTimeFormat("fr-FR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(new Date(user.createdAt))}
                  </p>
                </div>
                <div className="flex items-center justify-center p-5">
                  <p
                    className={`text-md flex items-center justify-center gap-2 font-medium text-gray-800 rounded-sm px-4 py-2 ${
                      user.role === "ADMIN" ? "bg-yellow-400" : "bg-green-400"
                    }`}
                  >
                    {user.role === "ADMIN" ? (
                      <>
                        <MdAdminPanelSettings className="inline" />{" "}
                        Administrateur
                      </>
                    ) : (
                      <>
                        <FaUser className="inline" /> Utilisateur
                      </>
                    )}
                  </p>
                </div>
                <div className="flex items-center justify-center p-5 gap-4">
                  <p className="text-md font-medium text-gray-800 bg-gray-400 px-4 py-2 rounded-sm cursor-pointer">
                    Éditer
                  </p>
                  <p
                    className="text-md font-medium text-gray-800 bg-red-600 px-4 py-2 rounded-sm cursor-pointer"
                    onClick={() => {
                      setSelectedUser(user._id);
                      setIsOpen(true);
                      console.log(selectedUser);
                    }}
                  >
                    Supprimer
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <AdminModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-black">
          Êtes-vous sur de vouloir supprimer cet utilisateur ?
        </h2>
        <div className="flex justify-around text-black mt-8">
          <span className="bg-gray-300 px-8 py-2 cursor-pointer">Non</span>
          <span
            onClick={handleDeleteUser}
            className="bg-red-600 px-8 py-2 cursor-pointer text-white"
          >
            Oui
          </span>
        </div>
      </AdminModal>
    </div>
  );
};

export default UserTable;
