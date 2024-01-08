import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "EC Admin",
  description: "EC Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
