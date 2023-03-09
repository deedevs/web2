import React from "react";
import mobIcon from "../assets/online.png";

const OnlinePayment = () => {
  return (
    <div className="md:flex px-3 py-3 md:justify-between md:items-center bg-blue-100   md:py-8 md:px-64 md:mt-[70px]">
      <div className="">
        <img
          className="md:py-4 md:px-6"
          src={mobIcon}
          alt="mobile"
          id="mobicon"
          srcSet=""
        />
      </div>
      <div className="md:w-[50%] md:py-8 md:px-8">
        <h4 className="text-2xl text-blue-900 md:py-2">Online Payment</h4>
        <hr />
        <h1 className="text-4xl font-bold md:pb-2">
          Make Your Online Payment Almost Every Site
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam libero
          vero asperiores officiis nemo voluptate officia. Magnam necessitatibus
          ab corrupti odio veniam quidem doloremque eius architecto recusandae
          sapiente, temporibus voluptatibus.
        </p>
        <button className="py-4 mt-10 px-16 rounded-full bg-blue-800  text-white">
          Location
        </button>
      </div>
    </div>
  );
};

export default OnlinePayment;
