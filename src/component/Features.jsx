import React from "react";
import Lelfimg from "../assets/images/left.png";
import CenterImg from "../assets/images/h1.png";
import RightImg from "../assets/images/right.png";

const Features = () => {
  return (
    <section className="Features py-6 md:px-4 md:py-8">
      <div className="container text-center md:absolute mx-auto md:w-[100%]">
        <div className="container md:mx-auto md:px-3">
          <h1 className="text-2xl md:text-5xl lg:text-blue-900 text-blue-900 font-bold py-2">
            We Bring Everything In One Place
          </h1>
          <p className="md:w-[100%] md:-ml-4 lg:w-[50%] lg:mx-auto lg:py-4 md:text-center md:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="imgs relative pt-8 lg:px-16 flex md:mx-auto md:w-full md:relative lg:absolute lg:mt-[-130px] lg:z-0 md:z-0 z-0 ">
          <img
            id="rightImg"
            className="w-[50%] h-[20%] md:w-[50%] lg:top-64  relative md:top-16 lg:h-[30%]  z-0 top-16 lg:left-16"
            src={Lelfimg}
            alt="pic"
            srcSet=""
          />
          <img
            id="centerImg"
            className="z-50  md:left-8 md:ml-[-340px] ml-[-190px] lg:ml-[-350px] md:w-[80%] lg:w-[60%] lg:mt-32"
            src={CenterImg}
            alt="pic"
            srcSet=""
          />
          <img
            id="rightImg"
            className="w-[50%] lg:left-[420px] absolute z-10 md:left-16 lg:h-[50%] top-16 left-[100px] md:ml-[290px] md:top-32 lg:top-64 ml-[80px] mt-8  "
            src={RightImg}
            alt="riht"
            srcSet=""
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
