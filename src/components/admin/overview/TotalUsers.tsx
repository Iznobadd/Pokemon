import { FaUsers } from "react-icons/fa6";
import Loading from "../../Loading";
import { useTotalUsers } from "../../../services/user/queries";

const TotalUsers = () => {
  const getTotalUsers = useTotalUsers();
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-8 shadow-default">
      {getTotalUsers.isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <FaUsers className="text-blue-700" />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-2xl font-bold text-black">
                {getTotalUsers.data}
              </h4>
              <span className="text-sm text-gray-700">Total Users</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TotalUsers;
