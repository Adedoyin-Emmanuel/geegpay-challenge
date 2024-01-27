import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideNav from "../../components/SideNav/SideNav";
import SalesTrend from "../../components/SalesTrend/SalesTrend";

const Dashboard = () => {
  return (
    <div className="w-screen h-full flex">
      <SideNav />
      <DashboardHeader>
        <SalesTrend />
      </DashboardHeader>
    </div>
  );
};

export default Dashboard;
