import AverageOrderValue from "../../components/admin/overview/AverageOrderValue";
import LastOrderTable from "../../components/admin/overview/LastOrderTable";
import TotalOrders from "../../components/admin/overview/TotalOrders";
import TotalProfit from "../../components/admin/overview/TotalProfit";
import TotalUsers from "../../components/admin/overview/TotalUsers";

const HomeDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-7">
        <TotalProfit />
        <TotalUsers />
        <TotalOrders />
        <AverageOrderValue />
      </div>
      <div className="grid grid-cols-1 gap-7 mt-10">
        <LastOrderTable />
      </div>
    </>
  );
};

export default HomeDashboard;
