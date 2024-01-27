import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps): JSX.Element => {
  return (
    <div
      className={`rounded-[14px] bg-white border-[1px] border-[#EDF2F7] p-3 md:w-[239px] md:h-[179px] flex flex-col justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
