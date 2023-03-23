import React from "react";
import "./rate.css";

const Rates = () => {
  return (
    <div className="ticket-wrapp relative max-w-[100%] md:max-w-[60%] lg:mt-4 mx-auto rounded-md w-full pt-200px">
      <div
        id="bighea"
        className="bighea block absolute font-italic md:text-[35px] bg-red-500 text-white uppercase py-[15px] px-[15px] italic z-[1] rounded-md "
      >
        Rates
      </div>
      <div className="text-up h-[50px] md:h-[78px] bg-bgColor  shadow-inner overflow-hidden relative text-white uppercase text-[25px] font-semibold flex items-center left-[12px]">
        <ul className="flex rate-text justify-between w-full space-x-12 md:absolute md:w-[150%] mx-0 my-0">
          <li className="flex flex-row relative justify-between space-x-4">
            <h1 className="text-white">1-----D67</h1>
          </li>

          <li className="flex flex-row relative justify-between space-x-4"></li>
          <li className="">
            <span>{"D67---"}$2</span>
          </li>
          <li className="flex flex-row relative justify-between space-x-4">
            <span>11$-----D67</span>
          </li>
          <li className="flex flex-row relative justify-between space-x-4">
            <span>11$-----D67</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rates;
