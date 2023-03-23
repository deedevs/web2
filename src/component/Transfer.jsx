import React from "react";
import LogoM from "../assets/images/moneyV.webp";

const Transfer = () => {
  return (
    <section className="main py-2 px-1 md:py-4 bg-[#256be6] " id="send">
      <div className="container md:py-10 md:mx-auto md:w-[90%] lg:px-32 md:flex md:space-x-8 md:-ml-4">
        <div className="img-wrapper  mx-auto md:mt-[40px]  py-1">
          <img
            className="w-[50%] cover-fit md:ml-[-80px] md:w-[50%] md:top-[20p] md:mt-[10px] md:absolute lg:w-[20%] mx-auto"
            src={LogoM}
            alt=""
            srcset=""
          />
        </div>
        <div className="md:container md:left-32 md:relative px-4 md:w-[70%] lg:w-[50%] md:px-16">
          <h3 className="uppercase  text-slate-50 font-semibold text-lg ml-4 ">
            Fast Transfer
          </h3>
          <hr className="w-16 ml-4 bg-blue-900 text-[#6c6c6f]" />
          <h1 className="text-2xl md:text-4xl py-2 px-2 font-bold">
            Send Money Anytime, Anywhere In a Minute
          </h1>
          <p className="py-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          </p>
          <p className="text-white md:container">
            ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida.
          </p>
          <a
            className="inline-block font-semibold md:w-[56%] min-w-[40px] py-[10px] mt-6 mx-[10px] relative overflow-hidden w-[50%] text-center  bg-white hover:bg-white hover:text-blue-800  rounded-full text-[#256be6]"
            href="http://"
          >
            Send Money
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
