import React from "react";
import GradientBorder from "./GradientBorder";

function ButtonPrimary({
  children,
  isDecorated = true,
  textClassName,
  buttonClassName,
}) {
  if (isDecorated) {
    return (
      <div className="relative w-fit group">
        <GradientBorder
          className="-bottom-[8px] -right-[6px] absolute z-0"
        ></GradientBorder>
        <div
          className={`bg-gradient-to-r from-primary to-secondary relative px-5 py-2 rounded-full w-fit 
          transition-all duration-300 ease-in-out hover:translate-x-[5px] hover:translate-y-[7px]
          active:translate-x-[7px] active:translate-y-[9px] cursor-pointer ${buttonClassName}`}
        >
          <a href="#" className={`text-2xl font-Roboto z-0 ${textClassName}`}>
            {children}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-r from-primary to-secondary relative px-5 py-2 rounded-full w-fit 
      transition-all duration-200 ease-in-out hover:opacity-90 active:scale-95 cursor-pointer ${buttonClassName}`}
    >
      <a href="#" className={`text-2xl font-Roboto z-0 ${textClassName}`}>
        {children}
      </a>
    </div>
  );
}

export default ButtonPrimary;
