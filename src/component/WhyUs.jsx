import React from "react";
import "../component/home.css";
const WhyUs = () => {
  return (
    <>
      <div className="main-wrapper mt-8 px-5 md:py-1 md:mt-[-30px] h-[1500px] md:flex md:justify-between md:items-center md:h-[700px]  ">
        <div className="w-[100%] md:w-[50%] md:px-16 md:mt-[-180px]">
          <h1 className="font-bold text-4xl py-4 w-[100%] text-white md:w-[60%] ">
            Simple and Easy Solution for Transfer Money Safe and Faster Way
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis repellendus minus soluta quibusdam dolorem amet in
            corrupti mollitia praesentium, consectetur, incidunt eveniet quaerat
            ad! Eius excepturi culpa delectus ut. Possimus.
          </p>
          <button className="py-4 mt-10 px-16 rounded-full bg-blue-800 border-zinc-200 border text-white">
            Learn More
          </button>
        </div>
        <div className=" px-8 mx-8  md:flex md:px-32 md:w-[50%] md:mt-[-320px]">
          <div className="w-[100%] md:w-[50%]">
            <div className="ico w-[100%] mx-8 py-4">
              <i class="fa-solid fa-money-bill-transfer text-blue-800 text-6xl "></i>
              <h2 className="font-bold text-2xl w-[100%] text-white ml-[-20px]">
                Instant Cashout
              </h2>
              <p className="w-[100%] ml-[-20px] md:w-[100%] md:ml-[-40px] md:px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                tempore in inventore quis eius eum?
              </p>
            </div>
          </div>
          <div className="w-[100%] ml-[-20px] md:w-[50%] md:mt-4 ">
            <div className="ico w-[100%] mx-10">
              <i class="fa-solid fa-shield-halved text-blue-800 text-6xl ml-10"></i>
              <h2 className="font-bold text-2xl w-[100%] text-white">
                Fully Encrypted{" "}
              </h2>
              <p className="w-[100%]  ml-[-20px] md:w-[100%] md:ml-[-40px] md:px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                tempore in inventore quis eius eum?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="mt-[-500px] md:flex md:flex-row md:mt-[97px] md:w-full">
        <div className=" px-8 mx-8 md:w-full  md:flex md:flex-row md:px-16 md:absolute md:mt-[-500px] md:ml-[600px]">
          <div className="w-[100%] md:w-[50%] md:ml-[130px]">
            <div className="ico w-[100%] mx-8 py-4 md:w-[50%] md:ml-[150px]">
              <i class="fa-solid  fa-file-shield text-blue-800 mb:text-blue-200 text-6xl "></i>
              <h2 className="font-bold text-2xl w-[100%] text-white ml-[-20px]">
                Safe and Secure
              </h2>
              <p className="w-[100%] ml-[-20px] md:w-[55%] md:ml-[-40px] ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                tempore in inventore quis eius eum?
              </p>
            </div>
          </div>
          <div className="w-[100%] ml-[-20px] md:ml-[-390px] md:px-3 md:w-[50%]">
            <div className="ico w-[100%] mx-10 md:w-[50%] md:pr-5">
              <i class="fa-solid fa-shield-halved text-blue-800 text-6xl ml-10"></i>
              <h2 className="font-bold text-2xl w-[100%] text-white">
                Fully Encrypted
              </h2>
              <p className="w-[100%] ml-[-20px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                tempore in inventore quis eius eum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
