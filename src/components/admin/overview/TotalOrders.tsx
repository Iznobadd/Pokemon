import Loading from "../../Loading";
import { useTotalOrders } from "../../../services/order/queries";
import { SiTask } from "react-icons/si";

const TotalOrders = () => {
  const getTotalOrders = useTotalOrders();
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-8 shadow-md">
      {getTotalOrders.isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <SiTask className="text-blue-700" />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-2xl font-bold text-black">
                {getTotalOrders.data}
              </h4>
              <span className="text-sm text-gray-700">Commandes totales</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TotalOrders;
