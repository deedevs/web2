import React from "react";
import secIcon from "../assets/trac.webp";

const Speciality = () => {
  return (
    <div className="py-4 px-3 pb-6">
      <div className="md:text-center">
        <h3 className="font-bold text-2xl text-blue-900 md:py-2 md:pt-10">
          Our Speciality
        </h3>
        <h1 className="text-4xl font-bold md:pb-2">
          We Bring Everything In One Place
        </h1>
        <p className="md:w-[50%] md:text-center md:mx-0 md:ml-[400px] md:py-4 md:px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint
          optio officiis similique ex aspernatur odio, dolor cupiditate nesciunt
          maiores assumenda repellendus aliquid hic aliquam ad alias placeat
          facilis perspiciatis!
        </p>
      </div>
      <div className="md:flex md:justify-space md:w-[100%]  md:py-16 md:space-x-16 md:px-64 px-8 py-8">
        <div className="bg-slate-50  md:w-[40%] md:py-6 md:px-6 py-3 drop-shadow-lg px-2">
          <img src={secIcon} alt="icon" id="secure" srcSet="" />
          <h4 className="text-2xl text-blue-900 text-center md:py-2 mt-4">
            Fully Secure Payment
          </h4>
          <p className="md:text-center px-2 py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="bg-slate-50  md:w-[40%]  md:py-6 md:px-6 py-3 pt-2 pb-4 mt-4 drop-shadow-lg">
          <img src={secIcon} alt="icon" id="secure" srcSet="" />
          <h4 className="text-2xl text-blue-900 text-center md:py-2">
            No Transition Charge
          </h4>
          <p className="md:text-center px-2 py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="bg-slate-50  md:w-[40%]  md:py-6 md:px-6 mt-4 drop-shadow-lg">
          <img src={secIcon} alt="icon" id="secure" srcSet="" />
          <h4 className="text-2xl text-blue-900 text-center md:py-2">
            Cashout In a Minute
          </h4>
          <p className="md:text-center px-2 py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
