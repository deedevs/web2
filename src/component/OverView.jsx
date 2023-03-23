import React from "react";
import Logo from "../assets/react.svg";

const OverView = () => {
  return (
    <>
      <section className="py-4 px-2">
        <div className="md:flex md:space-x-9 md:w-[90%] md:mx-auto md:px-8">
          <div className="md:w-[50%] lg:w-[40%] lg:px-8 md:mt-16">
            <h1 className="text-2xl md:text-5xl font-semibold text-blue-900">
              Simple and Easy Solution for Transfer Money Safe and Faster Way
            </h1>
            <p className="py-4 md:py-5 md:leading-[1.5rem] lg:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.{" "}
            </p>
            <a
              className="inline-block font-semibold md:w-[50%] min-w-[40px] py-[10px] mx-[10px] relative overflow-hidden w-[40%] text-center  text-white hover:bg-white hover:text-blue-800 border lg:py-3 lg:mt-3 rounded-full bg-[#256be6]"
              href="http://"
            >
              Learn More
            </a>
          </div>
          <div className="icon w-full md:px-1 md:w-[60%] md:mt-8   mx-auto py-6 md:flex md:flex-row md:-ml-2 md:space-x-0 md:flex-wrap">
            <div className="w-[100%]  md:w-[50%] lg:w-[40%] mx-auto md:py-4">
              <img
                className="w-[30%] md:w-[50%] lg:w-[20%] mx-auto lg:ml-32"
                src={Logo}
                alt=""
                srcset=""
              />
              <h4 className="text-xl text-center font-bold py-1 lg:text-blue-900 lg:text-2xl">
                24/7 Services
              </h4>
              <p className="text-center md:text-left md:ml-4 lg:w-[48%] lg:ml-[100px]">
                Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
              </p>
            </div>
            <div className="w-[100%] py-4  md:w-[50%] lg:w-[40%] mx-auto md:py-4">
              <i class="fa-solid ml-[40%] w-[30%] md:w-[50%] lg:w-[20%] mx-auto lg:ml-32 fa-money-bill-transfer text-blue-800 text-6xl "></i>
              <h4 className="text-xl text-center font-bold py-1 lg:text-blue-900 lg:text-2xl">
                Instance Cashout
              </h4>
              <p className="text-center md:text-left md:ml-4 lg:w-[48%] lg:ml-[100px]">
                Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
              </p>
            </div>
            <div className="w-[100%] lg:relative lg:left-[67px] lg:top-4 md:w-[50%] lg:w-[40%]  mx-auto md:py-4">
              <i class="fa-solid ml-[40%] fa-shield-halved text-blue-800 text-6xl md:w-[50%] lg:w-[20%] mx-auto lg:ml-32"></i>
              <h4 className="text-xl text-center font-bold py-1 lg:text-blue-900 lg:text-2xl">
                Fully Encripted
              </h4>
              <p className="text-center md:text-left md:ml-4 lg:w-[48%] lg:ml-[100px]">
                Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
              </p>
            </div>
            <div className="w-[100%]  md:w-[50%] lg:w-[40%] mx-auto md:py-4 lg:left-[150px] lg:relative lg:mt-[20px]">
              <img
                className="w-[30%] md:w-[50%] lg:w-[20%] mx-auto lg:ml-32"
                src={Logo}
                alt=""
                srcset=""
              />
              <h4 className="text-xl text-center font-bold py-1 lg:text-blue-900 lg:text-2xl">
                Safe And Secure
              </h4>
              <p className="text-center md:text-left md:ml-4 lg:w-[48%] lg:ml-[100px]">
                Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverView;
