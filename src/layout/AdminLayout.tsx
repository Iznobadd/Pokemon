import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        <main>
          <div className="mx-auto max-w-screen-2xl p-10"></div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
