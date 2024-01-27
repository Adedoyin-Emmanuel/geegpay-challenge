import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideNav from "../../components/SideNav/SideNav";
import SalesTrend from "../../components/SalesTrend/SalesTrend";
import Card from "../../components/Card/Card";
import BoxTickIcon from "./../../assets/icons/box-icon-1.svg";
import GreenGraphIcon from "./../../assets/icons/good-graph.svg";
import GreenTrendIcon from "./../../assets/icons/trending-up-icon.svg";

const Dashboard = () => {
  return (
    <div className="w-screen h-full flex">
      <SideNav />
      <DashboardHeader>
        <section className="w-full md:flex gap-6">
          <SalesTrend />
          <section className="my-5 md:my-0 p-2">
            <Card>
              <section className="card-header flex items-start justify-between">
                <img src={BoxTickIcon} alt="Box Tick" />
                <img src={GreenGraphIcon} alt="Green Graph" />
              </section>

              <h3 className="capitalize  text-[#898989] text-[18px] font-medium">
                total orders
              </h3>
              <h1 className="text-2xl font-[600]  text-[#3A3F51]">350</h1>

              <section className="flex items-start justify-between">
                <div
                  className="rounded-[1000px] flex items-center justify-between p-2 px-4  h-[24px]"
                  style={{
                    background: "rgba(52, 202, 165, 0.10)",
                  }}
                >
                  <img
                    src={GreenTrendIcon}
                    alt="Green trend"
                    className="h-3 w-3"
                  />
                  <p className="text-[12px] text-[#34CAA5]">23,5%</p>
                </div>

                <div className="flex">
                  <p className="text-[#606060] text-[14px]">
                    vs . previous month
                  </p>
                </div>
              </section>
            </Card>
          </section>
        </section>
      </DashboardHeader>
    </div>
  );
};

export default Dashboard;
