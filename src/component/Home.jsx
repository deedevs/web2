import React from "react";
import Rates from "./Rates";
import SendForm from "./SendForm";

const Home = () => {
  return (
    <>
      <div className="home" id="#home">
        <div className="container text-white py-[15px] px-[auto]">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="mx-auto relative w-full px-[15px]">
              <div className="mb-[30px] text-center md:w-[90%] mx-auto md:py-8 md:px-9">
                <h1 className="text-[20px] md:text-6xl md:leading-1 leading-6 py-3 px-1 capitalize font-semibold md:w-[100%] lg:w-[70%]">
                  Transfer Money Across World in Real Time With No Charge
                </h1>
                <p className="mt-0 md:w-[90%] lg:w-[60%] lg:ml-[10px] md:mx-auto leading-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspe ultrices gravida. Risus commodo viverra
                  maecenas .
                </p>
                <div className="flex flex-col md:flex-row md:w-[60%] w-64 mx-auto my-2 py-3 lg:ml-[10px] lg:mt-8 space-y-4 md:space-y-0">
                  <a
                    className="inline-block font-semibold md:w-[50%] min-w-[40px] py-[20px] mx-[10px] relative overflow-hidden  text-white hover:bg-white hover:text-blue-800  rounded-full bg-[#256be6]"
                    href="http://"
                  >
                    Receive Money
                  </a>
                  <a
                    className="inline-block font-semibold md:w-[50%] min-w-[40px] py-[20px] mx-[10px] relative overflow-hidden border text-white hover:bg-white hover:text-blue-800  rounded-full"
                    href="http://"
                  >
                    Receive Money
                  </a>
                </div>
                <div className="form lg:left-[64%] md:left-[58%] ml-4 w-[94%] lg:mt-[-260px] md:mt-[10px]  lg:absolute border py-8 px-4 lg:w-[30%]">
                  <div className="flex space-x-[50%]  md:space-x-[50%] lg:ml-2 lg:space-x-[66%] md:ml-[50px]">
                    <button className="bg-white rounded-sm text-blue-900 w-[80px] h-[40px]">
                      Send
                    </button>
                    <button className="bg-white rounded-sm text-blue-400 w-[80px] h-[40px]">
                      Receive
                    </button>
                  </div>
                  <div className="md:ml-[40px] lg:ml-[10px]">
                    <SendForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Rates />
      </div>
    </>
  );
};

export default Home;
