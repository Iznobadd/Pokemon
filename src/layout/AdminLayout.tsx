import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#f1f5f9]">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        <main className="">
          <div className="mx-auto max-w-screen-2xl p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
