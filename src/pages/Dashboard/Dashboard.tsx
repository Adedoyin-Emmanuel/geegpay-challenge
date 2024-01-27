import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideNav from "../../components/SideNav/SideNav";

const Dashboard = () => {
  return (
    <div className="w-screen h-full flex">
      <SideNav />
      <DashboardHeader />
    </div>
  );
};

export default Dashboard;
