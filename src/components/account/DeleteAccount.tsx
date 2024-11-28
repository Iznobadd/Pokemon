import { useNavigate } from "react-router-dom";
import { useDeleteMyAccount } from "../../services/user/mutations";

const DeleteAccount = ({ onSuccess }: { onSuccess: () => void }) => {
  const deleteAccount = useDeleteMyAccount();
  const navigate = useNavigate();
  const handleSubmit = () => {
    deleteAccount.mutate(undefined, {
      onSuccess: () => {
        onSuccess();
        localStorage.removeItem("access_token");
        navigate("/login");
      },
    });
  };
  return (
    <div>
      <h2>Are you sure you want delete your account ? </h2>
      <div className="justify-around flex mt-6">
        <span
          className="px-6 py-2 bg-gray-800 cursor-pointer"
          onClick={onSuccess}
        >
          No
        </span>
        <span
          className="px-6 py-2 bg-red-600 cursor-pointer"
          onClick={() => handleSubmit()}
        >
          Yes
        </span>
      </div>
    </div>
  );
};

export default DeleteAccount;
