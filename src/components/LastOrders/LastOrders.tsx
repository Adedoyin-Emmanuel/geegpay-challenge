import Person1 from "./../../assets/images/person-1.png";
import Person2 from "./../../assets/images/person-2.png";
import Person3 from "./../../assets/images/person-3.png";
import Person4 from "./../../assets/images/person-4.png";
import Person5 from "./../../assets/images/person-5.png";
import ViewImage from "./../../assets/icons/file-download-icon.svg";

interface LastOrdersProps {
  className?: string;
}

const LastOrders = ({ className }: LastOrdersProps): JSX.Element => {
  return (
    <div
      className={`w-full h-[542px]  relative bg-white rounded-[14px] border border-slate-100 my-5 overflow-x-scroll ${className}`}
    >
      <div className="w-[766px] left-[20px] top-[18px] absolute justify-between items-center inline-flex">
        <div className="text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
          Last Orders
        </div>
        <div className="text-center text-emerald-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-relaxed">
          See All
        </div>
      </div>

      <div className="w-[766px] left-[45px] top-[58px] absolute justify-between items-start inline-flex">
        <div className="w-[216px] text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          Name
        </div>
        <div className="w-[116px] text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          Date
        </div>
        <div className="w-[120px] text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          Amount
        </div>
        <div className="w-[95px] text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          Status
        </div>
        <div className="w-20 text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          Invoice
        </div>
      </div>

      <div className="left-[-10px] top-[102px] absolute flex-col w-full justify-between items-start gap-4 inline-flex overflow-x-scroll">
        <section className="trans w-full flex items-center justify-around border-y-[1px] border-t-[#EDF2F6] p-2 my-2 gap-x-2">
          <img src={Person1} alt="Person 1" />
          <div className="text-gray-700 text-base font-medium leading-normal">
            Marcus Bergson
          </div>

          <p>Nov 15, 2023</p>

          <p className="text-slate-900 text-base font-medium leading-normal">
            $80,000
          </p>
          <div className="text-emerald-400 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Paid
          </div>
          <div className="flex items-center gap-x-1">
            <img src={ViewImage} alt="Download icon" />
            <p>View</p>
          </div>
        </section>
        <section className="trans w-full flex items-center justify-around border-y-[1px] border-t-[#EDF2F6] p-2 my-2 gap-x-2">
          <img src={Person2} alt="Person 1" />
          <div className="text-gray-700 text-base font-medium leading-normal">
            Jaydon Vaccaro
          </div>

          <p>Nov 15, 2023</p>

          <p className="text-slate-900 text-base font-medium leading-normal">
            $150,000
          </p>
          <div className="text-[#ED544E] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Refund
          </div>
          <div className="flex items-center gap-x-1">
            <img src={ViewImage} alt="Download icon" />
            <p>View</p>
          </div>
        </section>

        <section className="trans w-full flex items-center justify-around border-y-[1px] border-t-[#EDF2F6] p-2 my-2 gap-x-2">
          <img src={Person3} alt="Person 1" />
          <div className="text-gray-700 text-base font-medium leading-normal">
            Corey Schleifer
          </div>

          <p>Nov 15, 2023</p>

          <p className="text-slate-900 text-base font-medium leading-normal">
            $87,000
          </p>
          <div className="text-emerald-400 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Paid
          </div>
          <div className="flex items-center gap-x-1">
            <img src={ViewImage} alt="Download icon" />
            <p>View</p>
          </div>
        </section>

        <section className="trans w-full flex items-center justify-around border-y-[1px] border-t-[#EDF2F6] p-2 my-2 gap-x-2">
          <img src={Person4} alt="Person 1" />
          <div className="text-gray-700 text-base font-medium leading-normal">
            Cooper Press
          </div>

          <p>Nov 15, 2023</p>

          <p className="text-slate-900 text-base font-medium leading-normal">
            $100,000
          </p>
          <div className="text-[#ED544E] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Refund
          </div>
          <div className="flex items-center gap-x-1">
            <img src={ViewImage} alt="Download icon" />
            <p>View</p>
          </div>
        </section>

        <section className="trans w-full flex items-center justify-around border-y-[1px] border-t-[#EDF2F6] p-2 my-2 gap-x-2">
          <img src={Person5} alt="Person 1" />
          <div className="text-gray-700 text-base font-medium leading-normal">
            Phillip Lubin
          </div>

          <p>Nov 15, 2023</p>

          <p className="text-slate-900 text-base font-medium leading-normal">
            $80,000
          </p>
          <div className="text-emerald-400 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Paid
          </div>
          <div className="flex items-center gap-x-1">
            <img src={ViewImage} alt="Download icon" />
            <p>View</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LastOrders;
