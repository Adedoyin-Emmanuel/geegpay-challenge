import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideNav from "../../components/SideNav/SideNav";
import SalesTrend from "../../components/SalesTrend/SalesTrend";
import Card from "../../components/Card/Card";
import BoxTickIcon from "./../../assets/icons/box-icon-1.svg";
import Box3DRotateIcon from "./../../assets/icons/box-icon-2.svg";
import GreenGraphIcon from "./../../assets/icons/good-graph.svg";
import BadGraphIcon from "./../../assets/icons/bad-graph.svg";
import GreenTrendIcon from "./../../assets/icons/trending-up-icon.svg";
import BadTrendIcon from "./../../assets/icons/trending-down-icon.svg";
import ShoppingIcon from "./../../assets/icons/cart-icon.svg";
import DollarIcon from "./../../assets/icons/coin-icon.svg";
import LastOrders from "../../components/LastOrders/LastOrders";
import TopPlatform from "../../components/TopPlatform/TopPlatform";
const Dashboard = () => {
  return (
    <div className="h-full flex overflow-x-hidden">
      <SideNav />
      <DashboardHeader>
        <section className="w-full md:flex gap-10 justify-between">
          <SalesTrend />
          <section className="w-full flex md:flex-row flex-col flex-wrap md:items-center md:justify-between  gap-5 md:gap-10 my-5 md:my-0 p-2">
            <Card>
              <section className="card-header flex items-start justify-between">
                <img src={BoxTickIcon} alt="Box Tick" />
                <img src={GreenGraphIcon} alt="Green Graph" />
              </section>

              <h3 className="capitalize  text-[#898989] text-[18px] font-medium">
                total orders
              </h3>
              <h1 className="text-2xl font-[600]  text-[#3A3F51]">350</h1>

              <section className="flex items-start justify-between md:my-0 my-2">
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
                  <p className="text-[12px] text-[#34CAA5]">23.5%</p>
                </div>

                <div className="flex">
                  <p className="text-[#606060] text-[14px]">
                    vs . previous month
                  </p>
                </div>
              </section>
            </Card>

            <Card>
              <section className="card-header flex items-start justify-between">
                <img src={Box3DRotateIcon} alt="Box Tick" />
                <img src={BadGraphIcon} alt="Bad Graph" />
              </section>

              <h3 className="capitalize  text-[#898989] text-[18px] font-medium">
                total refund
              </h3>
              <h1 className="text-2xl font-[600]  text-[#3A3F51]">270</h1>

              <section className="flex items-start justify-between md:my-0 my-2">
                <div
                  className="rounded-[1000px] flex items-center justify-between p-2 px-4  h-[24px]"
                  style={{
                    background: "rgba(237, 84, 78, 0.12)",
                  }}
                >
                  <img src={BadTrendIcon} alt="Red trend" className="h-3 w-3" />
                  <p className="text-[12px] text-[#ED544E]">23.5%</p>
                </div>

                <div className="flex">
                  <p className="text-[#606060] text-[14px]">
                    vs . previous month
                  </p>
                </div>
              </section>
            </Card>

            <Card>
              <section className="card-header flex items-start justify-between">
                <img src={ShoppingIcon} alt="Shopping icon" />
                <img src={BadGraphIcon} alt="Bad Graph" />
              </section>

              <h3 className="capitalize  text-[#898989] text-[18px] font-medium">
                average sales
              </h3>
              <h1 className="text-2xl font-[600]  text-[#3A3F51]">1576</h1>

              <section className="flex items-start justify-between md:my-0 my-2">
                <div
                  className="rounded-[1000px] flex items-center justify-between p-2 px-4  h-[24px]"
                  style={{
                    background: "rgba(237, 84, 78, 0.12)",
                  }}
                >
                  <img src={BadTrendIcon} alt="Red trend" className="h-3 w-3" />
                  <p className="text-[12px] text-[#ED544E]">23.5%</p>
                </div>

                <div className="flex">
                  <p className="text-[#606060] text-[14px]">
                    vs . previous month
                  </p>
                </div>
              </section>
            </Card>

            <Card className="transform md:translate-y-2">
              <section className="card-header flex items-start justify-between">
                <img src={DollarIcon} alt="Coin icon" />
                <img src={GreenGraphIcon} alt="Green Graph" />
              </section>

              <h3 className="capitalize  text-[#898989] text-[18px] font-medium">
                total income
              </h3>
              <h1 className="text-2xl font-[600]  text-[#3A3F51]">$350.00</h1>

              <section className="flex items-start justify-between md:my-0 my-2">
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
                  <p className="text-[12px] text-[#34CAA5]">23.5%</p>
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
        <section className="w-full md:flex gap-10 ">
          <LastOrders />
          <TopPlatform className="" />
        </section>
      </DashboardHeader>
    </div>
  );
};

export default Dashboard;
