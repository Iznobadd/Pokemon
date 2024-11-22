import TotalProfit from "../../components/admin/overview/TotalProfit";
import TotalUsers from "../../components/admin/overview/TotalUsers";

const HomeDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-7">
      <TotalProfit />
      <TotalUsers />
    </div>
  );
};

export default HomeDashboard;
