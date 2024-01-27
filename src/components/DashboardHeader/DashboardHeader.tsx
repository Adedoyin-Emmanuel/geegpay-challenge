import SearchIcon from "./../../assets/icons/search-icon.svg";
import CalenderIcon from "./../../assets/icons/calendar-icon.svg";
import NotificationIcon from "./../../assets/icons/bell-icon.svg";
import ProfileImage from "./../../assets/images/profile-image.png";
import DropIcon from "./../../assets/icons/down-icon.svg";

interface DashboardHeaderProps {
  className?: string;
}

const DashboardHeader = ({ className }: DashboardHeaderProps): JSX.Element => {
  return (
    <div
      className={`w-full h-[5rem]  bg-[#FAFAFA] ${className} flex gap-[18px] items-center justify-between p-[18px] border-b border-b-[#E5EAEF]`}
    >
      <h3 className="text-[#26282C] text-[20px] font-[600] capitalize hidden sm:block">
        dashboard
      </h3>

      <section className="ham-burger sm:hidden">
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
  );
};

export default DashboardHeader;
