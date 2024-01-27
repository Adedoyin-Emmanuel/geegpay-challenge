import SearchIcon from "./../../assets/icons/search-icon.svg";
import CalenderIcon from "./../../assets/icons/calendar-icon.svg";
import NotificationIcon from "./../../assets/icons/bell-icon.svg";
import ProfileImage from "./../../assets/images/profile-image.png";
import DropIcon from "./../../assets/icons/down-icon.svg";
import Logo from "./../../assets/icons/logo.svg";
import CloseIcon from "./../../assets/icons/close-icon.svg";
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
import { useState, useRef } from "react";

interface DashboardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const DashboardHeader = ({
  className,
  children,
}: DashboardHeaderProps): JSX.Element => {
  const [navbarToggled, setNavbarToggle] = useState<boolean>(true);
  const navBarRef = useRef<HTMLDivElement | any>();

  const handleToggleNavbar = () => {
    const navBarContainer = navBarRef.current;
    setNavbarToggle(!navbarToggled);

    if (navbarToggled) {
      if (navBarContainer) {
        navBarContainer.classList.remove("fade-out");
        navBarContainer.classList.remove("hidden");
        navBarContainer.classList.add("fade-in");
      }
    } else {
      if (navBarContainer) {
        navBarContainer.classList.remove("fade-in");
        navBarContainer.classList.add("fade-out");
        navBarContainer.classList.add("hidden");
      }
    }
  };
  return (
    <section className="w-full flex flex-col">
      <section className="w-full">
        <div
          className={`w-full h-[5rem]  bg-[#FAFAFA] ${className} flex gap-[18px] items-center justify-between p-[18px] border-b border-b-[#E5EAEF]`}
        >
          <h3 className="text-[#26282C] text-[20px] font-[600] capitalize hidden md:block">
            dashboard
          </h3>

          <section
            className="ham-burger md:hidden"
            onClick={handleToggleNavbar}
          >
            <svg
              stroke="currentColor"
              fill="#26282C"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="font-bold"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </section>

          <section className="flex">
            <form className="hidden sm:flex relative ">
              <img
                src={SearchIcon}
                className="absolute left-4 top-1/2 transform -translate-y-3"
              />
              <input
                type="text"
                className="input rounded-[24px] pl-14 text-[#A3A3A3] inter-font w-[349px] border-[1px] border-[#DADDDD] focus:outline-none"
                placeholder="Search..."
              />
            </form>

            <section className="flex items-center gap-[20px]">
              <section className="flex items-center gap-[10px] md:gap-[20px]">
                <section className="hidden lg:flex p-[16px] gap-[8px]">
                  <img src={CalenderIcon} alt="calender icon" />

                  <p className="text-[14px] text-[#26282C] inter-font font-medium">
                    November 15, 2023
                  </p>
                </section>

                <div className="rounded-[27px] border-[0.769px] border-[#DADDDD] p-[11px] flex sm:hidden items-center justify-center h-[40px] w-[40px] cursor-pointer">
                  <img src={SearchIcon} alt="search icon" />
                </div>

                <div className="sm:mx-5 rounded-[27px] border-[0.769px] border-[#DADDDD] p-[11px] flex items-center justify-center h-[40px] w-[40px] cursor-pointer">
                  <img src={NotificationIcon} alt="notification icon" />
                </div>
              </section>

              <section className="rounded-[28px] border-[1px] gap-[12px] border-[#DADDDD] flex items-center p-[6px] pt-[8px] h-[40px] lg:w-[215px] lg:h-[52px] cursor-pointer">
                <img
                  src={ProfileImage}
                  alt="profile picture"
                  className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px]"
                />
                <section className="flex items-center gap-[12px]">
                  <section className="lg:flex hidden flex-col ">
                    <p className="text-[#26282C] inter-font font-normal m-0 p-0">
                      Justin Bergson
                    </p>
                    <p className="text-[#787486] text-[14px] p-0 m-0">
                      Justin@gmail.com
                    </p>
                  </section>
                  <img src={DropIcon} alt="" />
                </section>
              </section>
            </section>
          </section>
        </div>

        <section
          className="absolute top-0 hidden bg-[#F7F8FA] border-[1px] border-[#DADDDD] w-3/4 h-screen  p-4"
          ref={navBarRef}
        >
          <section className="my-2 flex items-center justify-between">
            <section className="logo">
              <img src={Logo} alt="Logo" />
            </section>
            <section className="close-icon" onClick={handleToggleNavbar}>
              <img src={CloseIcon} alt="Close Icon" />
            </section>
          </section>
          <br />
          <section className="flex items-center gap-3 my-6">
            <img src={CalenderIcon} alt="calender icon" />

            <p className="text-[13px] text-[#525252] inter-font font-medium">
              November 15, 2023
            </p>
          </section>

          <section className="flex items-center gap-3 my-6">
            <img src={DashboardIcon} alt="Dashboard icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Dashboard
            </p>
          </section>
          <section className="flex items-center gap-3 my-6">
            <img src={TrendingIcon} alt="Trends icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Trends
            </p>
          </section>
          <section className="flex items-center gap-3 my-6">
            <img src={ProfileIcon} alt="Profile icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Profile
            </p>
          </section>
          <section className="flex items-center gap-3 my-6">
            <img src={BoxIcon} alt="Orders icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Orders
            </p>
          </section>
          <section className="flex items-center gap-3 my-6">
            <img src={DiscountIcon} alt="Discounts icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Discounts
            </p>
          </section>

          <section className="flex items-center gap-3 my-6">
            <img src={InfoIcon} alt="Issues icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Issues
            </p>
          </section>
          <section className="flex items-center gap-3 my-6">
            <img src={ArrowRightIcon} alt="Others icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Others
            </p>
          </section>
          <section className="flex items-center gap-3 my-6">
            <img src={SettingsIcon} alt="Settings icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Settings
            </p>
          </section>

          <section className="flex items-center gap-3 my-6 ">
            <img src={LogoutIcon} alt="Logout icon" />
            <p className="text-[13px] text-[#525252] inter-font font-medium">
              Logout
            </p>
          </section>

          <section className="bg-[#fff] cursor-pointer rounded-[100px] flex flex-row p-2 gap-2 border-[1px] border-[#DADDDD] w-[96px]">
            <section className="bg-[#34CAA5] rounded-[94px] flex items-center justify-center w-[30px] h-[30px]">
              <img
                src={SunIcon}
                alt="Sun icon"
                className="w-[16.875px] h-[16.875px]"
              />
            </section>

            <section className="">
              <img
                src={MoonIcon}
                alt="Moon icon"
                className="w-[30px] h-[30px]"
              />
            </section>
          </section>
        </section>
      </section>

      <section className="w-full-h-full md:p-8 p-1 md:my-0 my-3">
        {/* <h3 className="text-[#26282C] text-[20px] font-[600] capitalize md:hidden my-2">
          dashboard
        </h3> */}

        {children}
      </section>
    </section>
  );
};

export default DashboardHeader;
