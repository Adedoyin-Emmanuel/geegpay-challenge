import Logo from "./../../assets/icons/logo.svg";
import DashboardIcon from "./../../assets/icons/dashboard-icon.svg";
import TrendingIcon from "./../../assets/icons/trend-icon.svg";
import ProfileIcon from "./../../assets/icons/profile-icon.svg";
import BoxIcon from "./../../assets/icons/box-icon.svg";
import DiscountIcon from "./../../assets/icons/discount-icon.svg";
import MoonIcon from "./../../assets/icons/moon-icon.svg";
import ArrowRightIcon from "./../../assets/icons/arrow-right.svg";
import SettingsIcon from "./../../assets/icons/settings-icon.svg";
import LogoutIcon from "./../../assets/icons/logout-icon.svg";
import SunIcon from "./../../assets/icons/sun-icon.svg";
import InfoIcon from "./../../assets/icons/info-circle-icon.svg";

interface SideNavProps {
  className?: string;
}

const SideNav = ({ className }: SideNavProps): JSX.Element => {
  return (
    <div
      className={`hidden min-h-screen max-h-screen w-[80px] py-[20px] gap-[20px] px-[0px]  bg-[#F7F8FA] border-[1px]  border-r-[#EBECF2] md:flex items-center justify-between flex-col transform  ${className}`}
    >
      <section className="flex items-center justify-between flex-col gap-[20px]">
        <section className="logo flex items-center">
          <img src={Logo} alt="Logo" />
        </section>

        <section className="cursor-pointer">
          <img src={DashboardIcon} alt="Dashboard icon" />
          <section className="bg-[#0D062D] h-[2.1rem] absolute top-[4.8rem] right-[0rem]  w-[0.3rem] rounded-tl-lg rounded-bl-lg"></section>
        </section>
        <section className="cursor-pointer">
          <img src={TrendingIcon} alt="Trend icon" />
        </section>
        <section className="cursor-pointer">
          <img src={ProfileIcon} alt="Profile icon" />
        </section>
        <section className="cursor-pointer">
          <img src={BoxIcon} alt="Box icon" />
        </section>
        <section className="cursor-pointer">
          <img src={DiscountIcon} alt="Discount icon" />
        </section>

        <section className="cursor-pointer">
          <img src={InfoIcon} alt="Info icon" />
        </section>

        <section className="bg-[#fff] cursor-pointer rounded-[100px] flex flex-col p-2 gap-2">
          <section className="bg-[#34CAA5] rounded-[94px] flex items-center justify-center w-[30px] h-[30px]">
            <img
              src={SunIcon}
              alt="Sun icon"
              className="w-[16.875px] h-[16.875px]"
            />
          </section>

          <section className="">
            <img src={MoonIcon} alt="Moon icon" className="w-[30px] h-[30px]" />
          </section>
        </section>
      </section>

      <section className="flex items-center justify-between gap-[16px] flex-col">
        <section className="cursor-pointer">
          <img src={ArrowRightIcon} alt="Arrow right icon" />
        </section>
        <section className="cursor-pointer">
          <img src={SettingsIcon} alt="Settings icon" />
        </section>

        <section className="cursor-pointer">
          <img src={LogoutIcon} alt="Logout icon" />
        </section>
      </section>
    </div>
  );
};

export default SideNav;
