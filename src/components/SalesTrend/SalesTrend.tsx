import ArrowDown from "./../../assets/icons/down-icon.svg";

interface SalesTrendProps {
  className?: string;
}

const SalesTrend = ({ className }: SalesTrendProps): JSX.Element => {
  return (
    <div
      className={`${className} p-6 pb-[1.8rem]  md:w-[806px] md:h-[347px] rounded-[14px] border-[1px] border-[#EDF2F7] bg-[#fff]`}
    >
      <section className="header mb-4 flex items-center justify-between">
        <h2 className="capitalize  text-[18px] font-[600]  text-[#26282C]">
          sales trend
        </h2>

        <section className="flex items-center justify-between gap-2">
          <p className="text-[#3A3F51] font-medium text-sm">Sort by:</p>

          <section className="flex p-[.6rem] px-[1.2rem] items-center gap-4 rounded-[2rem] border-[1px] border-[#E1DFDF]  bg-[#fff]  h-[32px]">
            <p className="text-[#3A3F51] font-normal text-[12px] capitalize">
              weekly
            </p>
            <img src={ArrowDown} alt="Down Icon" />
          </section>
        </section>
      </section>
    </div>
  );
};

export default SalesTrend;
