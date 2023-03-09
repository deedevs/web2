import React from "react";
import mobIcon from "../assets/moneyV.webp";
const Specialiy = () => {
  return (
    <div
      id="send"
      className="mx-8  md:flex md:justify-between md:text-auto md:py-4 md:px-16"
    >
      <div className="">
        <img
          className="py-4 px-6 object-fill"
          src={mobIcon}
          alt="mobile"
          id="mobicon"
          srcSet=""
        />
      </div>
      <div className="w-[100%] md:w-[80%] md:py-8 md:px-64 px-8 ">
        <h4 className="text-2xl text-blue-900 py-2 ">Fast Transfer</h4>
        <hr />
        <h1 className="text-4xl font-bold pb-2 md:text-justify">
          Send Money Anytime, Anywhere In a Minute
        </h1>
        <p className="md:text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam libero
          vero asperiores officiis nemo voluptate officia. Magnam necessitatibus
          ab corrupti odio veniam quidem doloremque eius architecto recusandae
          sapiente, temporibus voluptatibus.
        </p>
        <p className="py-3">
          officia. Magnam necessitatibus ab corrupti odio veniam quidem
          doloremque eius architecto recusandae sapiente, temporibus
          voluptatibus.
        </p>
        <button className="py-4 mt-8 px-16 rounded-full bg-blue-800  text-white">
          Send Money
        </button>
      </div>
      {/* <Arrow /> */}
    </div>
  );
};

export default Specialiy;
