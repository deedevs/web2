import React from "react";
import LogoM from "../assets/images/man.png";

const Charges = () => {
  return (
    <section className="main py-2 px-1 md:py-4 bg-[#f7faff] " id="charge">
      <div className="container flex-row-reverse md:py-10 md:mx-auto md:w-[90%] md:flex md:space-x-8">
        <div className="img-wrapper  mx-auto md:mt-[-40px]  py-1">
          <img
            className="w-[60%] md:w-[40%] lg:w-[30%] lg:mt-8 lg:-ml-64 md:px-4 md:absolute md:mt-[100px] py-4 ml-16 md:ml-[-210px]"
            src={LogoM}
            alt=""
            srcSet=""
          />
        </div>
        <div className="md:container md:relative lg:w-[50%] lg:left-8 lg:px-32 md:-left-[100px] px-4 md:w-[80%] md:ml-[40px] md:px-16">
          <h3 className="uppercase text-blue-800 md:text-2xl font-semibold text-lg ml-4 ">
            Charge Fee
          </h3>
          <hr className="w-16 ml-4 bg-blue-900 text-[#6c6c6f]" />
          <h1 className="text-2xl py-2 md:text-4xl px-2 font-bold capitalize">
            Receive Your Money With No Charge
          </h1>
          <p className="py-4 text-[#6c6c6f] leading-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          </p>

          <p className=" text-[#6c6c6f] md:container">
            ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida.
          </p>
          <a
            className="inline-block font-semibold md:w-[56%] min-w-[40px] py-[10px] mt-6 mx-[10px] relative overflow-hidden w-[50%] text-center  text-white hover:bg-white border border-cyan-700 hover:text-blue-800  rounded-full bg-[#256be6]"
            href="http://"
          >
            Find a Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default Charges;
