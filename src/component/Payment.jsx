import React from "react";
import LogoM from "../assets/images/trac.webp";

const Payment = () => {
  return (
    <section
      className="main py-2 md:px-8 px-1 md:py-4 bg-[#256be6] "
      id="#payment"
    >
      <div className="container md:relative md:py-10 md:mx-auto md:w-[90%] md:flex md:space-x-8">
        <div className="img-wrapper  mx-auto md:mt-[-40px]  py-1">
          <img
            className="w-[60%] md:ml-[-120px] md:absolute md:w-[400px] md:px-4 md:mt-[60px] py-4 ml-16"
            src={LogoM}
            alt=""
            srcSet=""
          />
        </div>
        <div className="md:container px-4 md:w-[76%] lg:w-[50%] lg:px-32 md:relative md:left-[90px] md:px-16 lg:-left-32">
          <h3 className="uppercase text-slate-50 font-semibold text-lg ml-4 ">
            Online Payment
          </h3>
          <hr className="w-16 ml-4 bg-blue-900 text-[#6c6c6f]" />
          <h1 className="text-2xl py-2 md:text-4xl px-2 font-bold">
            Make Your Online Payment Almost Every Site
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
            className="inline-block font-semibold md:w-[56%] md:min-w-[50px] min-w-[40px] py-[10px] mt-6 mx-[10px] relative overflow-hidden w-[50%] text-center  bg-white hover:bg-white hover:text-blue-200  rounded-full text-[#256be6]"
            href="http://"
          >
            Make a Payment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Payment;
