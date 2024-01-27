interface TopPlatformProps {
  className?: string;
}

const TopPlatform = ({ className }: TopPlatformProps): JSX.Element => {
  return (
    <div
      className={`w-full md:w-full h-[542px] pl-5 pr-4 pt-4 pb-8 bg-white rounded-lg flex-col justify-start items-start gap-5 inline-flex  border border-slate-100 my-5 overflow-hidden ${className}`}
    >
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
          Top Platform
        </div>
        <div className="text-center text-emerald-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-relaxed">
          See All
        </div>
      </div>
      <div className="self-stretch h-[448px] flex-col justify-start items-start gap-5 inline-flex">
        <div className="h-[97px] relative">
          <div className="w-[124.41px] left-0 top-0 absolute text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
            Book Bazaar
          </div>
          <div className="w-[452px] h-3 left-0 top-[43px] absolute">
            <div className="w-[452px] h-3 left-0 top-0 absolute bg-neutral-100 rounded-[40px]" />
            <div className="w-[245px] h-3 left-0 top-0 absolute bg-indigo-500 rounded-[40px]" />
          </div>
          <div className="w-[452px] h-[26px] left-0 top-[71px] absolute justify-between items-center inline-flex">
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              {" "}
              $2,500,000
            </div>
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              +15%
            </div>
          </div>
        </div>
        <div className="h-[97px] relative">
          <div className="w-[120.99px] left-0 top-0 absolute text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
            Artisan Aisle
          </div>
          <div className="w-[452px] h-3 left-0 top-[43px] absolute">
            <div className="w-[452px] h-3 left-0 top-0 absolute bg-neutral-100 rounded-[40px]" />
            <div className="w-[204.31px] h-3 left-0 top-0 absolute bg-sky-400 rounded-[40px]" />
          </div>
          <div className="w-[452px] h-[26px] left-0 top-[71px] absolute justify-between items-center inline-flex">
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              $1,800,000
            </div>
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              +10%
            </div>
          </div>
        </div>
        <div className="h-[97px] relative">
          <div className="w-[95.88px] left-0 top-0 absolute text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
            Toy Troop
          </div>
          <div className="w-[452px] h-3 left-0 top-[43px] absolute">
            <div className="w-[452px] h-3 left-0 top-0 absolute bg-neutral-100 rounded-[40px]" />
            <div className="w-[122.13px] h-3 left-0 top-0 absolute bg-amber-300 rounded-[40px]" />
          </div>
          <div className="w-[451px] h-[26px] left-0 top-[71px] absolute justify-between items-center inline-flex">
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              $1,200,000
            </div>
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              +8%
            </div>
          </div>
        </div>
        <div className="h-[97px] relative">
          <div className="w-[95.88px] left-0 top-0 absolute text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
            XStore
          </div>
          <div className="w-[452px] h-3 left-0 top-[43px] absolute">
            <div className="w-[452px] h-3 left-0 top-0 absolute bg-neutral-100 rounded-[40px]" />
            <div className="w-[122.13px] h-3 left-0 top-0 absolute bg-rose-500 rounded-md" />
          </div>
          <div className="w-[451px] h-[26px] left-0 top-[71px] absolute justify-between items-center inline-flex">
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              $600,000
            </div>
            <div className="text-neutral-600 text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              +5%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlatform;
