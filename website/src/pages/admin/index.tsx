import DashboardFrame from '@/domain/App/DashboardFrame';

const AdminHome = () => {
  return (
    <DashboardFrame isProtected={true} loginMethod="redirect">
      This is the protected admin dashboard
    </DashboardFrame>
  );
};

export default AdminHome;
