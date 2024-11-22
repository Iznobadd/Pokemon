import { FaDollarSign } from "react-icons/fa6";
import { useTotalProfit } from "../../../services/stripe/queries";
import Loading from "../../Loading";

const TotalProfit = () => {
  const getTotalProfit = useTotalProfit();
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-8 shadow-default">
      {getTotalProfit.isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <FaDollarSign className="text-blue-700" />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-2xl font-bold text-black">
                ${getTotalProfit.data}
              </h4>
              <span className="text-sm text-gray-700">Total Profit</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TotalProfit;
