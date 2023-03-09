import React from "react";
import mobIcon from "../assets/man.png";

const Charge = () => {
  return (
    <>
      <div
        id="receive"
        className="animated bounceInRight px-3 mt-4 w-full md:flex md:justify-between md:items-center md:py-8 md:px-64 md:mt-[70px]"
      >
        <div className="md:w-[50%] py-8 md:px-8">
          <h4 className="text-2xl text-blue-900 py-6 font-bold  md:py-2 w-full text-center px-8">
            Charge Fee
          </h4>
          <hr />
          <h1 className="text-4xl w-full font-bold pb-2">
            Receive Your Money With No Charge
          </h1>
          <p className="w-[100%] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero vero asperiores officiis nemo voluptate officia. Magnam
            necessitatibus ab corrupti odio veniam quidem doloremque eius
            architecto recusandae sapiente, temporibus voluptatibus.
          </p>
          <button className="py-4 mt-10 px-16 rounded-full bg-blue-800  text-white">
            Receive Money
          </button>
        </div>
        <div className="">
          <img
            className="py-4 px-6"
            src={mobIcon}
            alt="mobile"
            id="mobicon"
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};

export default Charge;
