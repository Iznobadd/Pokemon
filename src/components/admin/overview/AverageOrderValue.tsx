import { FaCoins } from "react-icons/fa6";
import Loading from "../../Loading";
import { useAverageOrderValue } from "../../../services/stripe/queries";

const AverageOrderValue = () => {
  const getAverageOrderValue = useAverageOrderValue();
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-8 shadow-md">
      {getAverageOrderValue.isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <FaCoins className="text-blue-700" />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-2xl font-bold text-black">
                ${getAverageOrderValue.data?.toFixed(2)}
              </h4>
              <span className="text-sm text-gray-700">Moyenne de commande</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AverageOrderValue;
