import React from "react";
import Logo from "../assets/react.svg";

const Speciality = () => {
  return (
    <section className="py-5 bg-[#256be6] lg:w-full " id="speciality">
      <div className="header px-4 lg:w-[60%] lg:mx-auto">
        <h4 className="text-white text-2xl font-bold text-center md:py-4">
          Our Speciality
          <hr className="w-[20%] ml-16 md:ml-[280px] lg:py=3 lg:w-32 lg:ml-[360px] py-2" />
        </h4>
        <h1 className="text-2xl text-center lg:text-3xl font-bold  py-2">
          We Bring Everything In One Place
        </h1>
        <p className="py-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
      <div className="container flex flex-col justify-center md:space-x-4 items-center md:flex-row md:px-16 lg:w-[60%] lg:mx-auto space-y-4 lg:space-x-8">
        <div className="card py-3 px-3 rounded-md shadow-lg  lg:mx-auto bg-slate-50 w-[90%] md:w-[50%] lg:w-[60%] flex flex-col justify-center">
          <img
            className="w-[33%] ml-[100px] lg:w-[30%] md:ml-[60px] lg:ml-[80px]"
            src={Logo}
            alt="pic"
            srcSet=""
          />
          <h3 className="font-bold text-blue-900 text-lg px-3 w-full text-center">
            Fully Secure Payment
          </h3>
          <p className="px-2 text-center">
            Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
          </p>
        </div>
        <div className="card py-3 px-3 rounded-md shadow-lg bg-slate-50 w-[90%] md:w-[50%] flex lg:w-[60%] flex-col justify-center">
          <img
            className="w-[33%] ml-[100px] md:ml-[60px] lg:ml-[80px] lg:w-[30%]"
            src={Logo}
            alt="pic"
            srcSet=""
          />
          <h3 className="font-bold text-blue-900 text-lg px-3 w-full text-center capitalize">
            Cashout in A Minute
          </h3>
          <p className="px-2 text-center">
            Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
          </p>
        </div>
        <div className="card py-3 px-3 rounded-md shadow-lg bg-slate-50 w-[90%] md:w-[50%] flex lg:w-[60%] flex-col justify-center">
          <img
            className="w-[33%] ml-[100px] md:ml-[60px] lg:ml-[80px] lg:w-[30%]"
            src={Logo}
            alt="pic"
            srcSet=""
          />
          <h3 className="font-bold text-blue-900 text-lg px-3 w-full text-center capitalize">
            No Transition Charge
          </h3>
          <p className="px-2 text-center">
            Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
