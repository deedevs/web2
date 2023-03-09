import React from "react";

const TestimonialCard2 = ({
  image,
  name,
  role,

  comment,
}) => {
  return (
    <div className="mt-16 max-w-xl pb-8 md:z-50 md:px-16 md:ml-[20%] p-8 shadow-lg">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto ">
        <img
          src={image}
          alt=""
          srcset=""
          className="rounded-full h-full w-full border
             border-[#132096] p-2"
        />
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-800 text-center mt-2">
        {name}
      </h3>
      <span className="text-sm md:text-base lg:text-lg font-medium text-blacktext-center  md:ml-[200px] ">
        {role}
      </span>
      <p className="leading-6 md:text-base text-sm text-blue-400  mx-auto text-center mt-6">
        {comment}
      </p>
    </div>
  );
};

export default TestimonialCard2;
