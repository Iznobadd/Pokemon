import AverageOrderValue from "../../components/admin/overview/AverageOrderValue";
import TotalOrders from "../../components/admin/overview/TotalOrders";
import TotalProfit from "../../components/admin/overview/TotalProfit";
import TotalUsers from "../../components/admin/overview/TotalUsers";

const HomeDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-7">
      <TotalProfit />
      <TotalUsers />
      <TotalOrders />
      <AverageOrderValue />
    </div>
  );
};

export default HomeDashboard;
