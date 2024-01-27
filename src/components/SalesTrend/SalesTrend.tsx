import ArrowDown from "./../../assets/icons/down-icon.svg";

interface SalesTrendProps {
  className?: string;
}

const SalesTrend = ({ className }: SalesTrendProps): JSX.Element => {
  const y = ["50.000", "40.000", "30.000", "20.000", "10.000", "5.000", "0"];
  const xInner = [
    "$7000",
    "$20,000",
    "$5000",
    "$20,000",
    "$10,500",
    "$45,000",
    "$12,000",
    "$20,000",
    "$32,000",
    "$6,500",
    "$26,000",
    "$20,000",
  ];

  const x = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      className={`${className} p-6 pb-[1.8rem] rounded-[14px] border-[1px] md:w-full border-[#EDF2F7] bg-[#fff]`}
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

      <section className="graph gap-4 flex" style={{ isolation: "isolate" }}>
        <section className="y flex flex-col items-start justify-between">
          {y.map((value, index) => {
            return (
              <p className="text-[12px] font-[600] text-[#525252]" key={index}>
                {value}
              </p>
            );
          })}
        </section>

        <section className="overflow-auto md:overflow-visible">
          <section className="x-axis-inner overflow-hidden w-[700px] flex flex-col relative">
            <section className="graph-lines flex-1 flex items-end justify-between bg-cover">
              {xInner.map((value, index) => (
                <div
                  className="graph-line w-[30px] h-[68px] rounded-tl-2xl rounded-tr-2xl relative transform duration-200 ease-linear"
                  style={{
                    background: "rgba(52, 202, 165, 0.10)",
                  }}
                >
                  <div
                    className="tooltip text-[12px] z-50"
                    data-tip={value}
                    key={index}
                  >
                    <p className="tooltip inter-font text-[12px] font-medium text-transparent">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </section>
            <section className="x-axis flex items-center justify-between">
              {x.map((value, index) => {
                return (
                  <p
                    className="text-[12px] font-[600] text-[#525252]"
                    key={index}
                  >
                    {value}
                  </p>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default SalesTrend;
