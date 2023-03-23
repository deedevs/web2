import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CEO from "../assets/images/img1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Team = () => {
  return (
    <>
      <section className="py-6 pb-32 bg-[#f7faff]" id="Team">
        <div className="py-6 .container max-auto">
          <h1 className="text-center text-blue-900 text-2xl capitalize">
            Meet Our Team
          </h1>
          <p className="w-full px-3 pt-2 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            non voluptatum delectus est nihil sint officiis dolor esse ipsam
            obcaecati dolorum, quam quibusdam facere modi sunt debitis eaque
            temporibus
          </p>
        </div>
        <div className="card-wrapper md:flex md:w-full md:flex-wrap md:items-center md:flex-row  md:mx-auto md:space-x-8 px-3 py-4 space-y-8">
          <div className="w-[100%] md:ml-8 md:mt-8 card-team md:w-[45%] lg:w-[22%] rounded-md h-[50%] px-2 py-8 flex flex-col  justify-center items-center shadow-lg">
            <div className="w-[50%]  py-2">
              <img
                className="rounded-full border-[3px] h-[150px] w-[150px]"
                src={CEO}
                alt="ceo"
                srcSet=""
              />
            </div>
            <div className="head">
              <h1>Yusupha Darboe</h1>
              <strong className="text-blue-900 text-center ml-8">
                Develop
              </strong>
            </div>
            <div className="flex space-x-5 py-2 text-2xl">
              <i className="fa-brands text-blue-900 fa-facebook-f"></i>
              <i className="fa-brands text-blue-400 fa-twitter"></i>
              <i className="fa-brands fa-instagram text-pink-600"></i>
            </div>
            <p className="px-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              dignissimos quod maxime libero! Itaque ipsa in dolorum similique
              veniam! Officiis voluptatem unde aperiam sit maxime laboriosam
              nobis officia voluptas id.
            </p>
          </div>
          <div className="w-[100%] md:w-[45%] lg:w-[22%]  card-team  rounded-md h-[50%] px-2 py-8 flex flex-col justify-center items-center shadow-lg">
            <div className="w-[50%]  py-2">
              <img
                className="rounded-full border-[3px] h-[150px] w-[150px]"
                src={CEO}
                alt="ceo"
                srcSet=""
              />
            </div>
            <div className="head">
              <h1>Yusupha Darboe</h1>
              <strong className="text-blue-900 text-center ml-8">
                Develop
              </strong>
            </div>
            <div className="flex space-x-5 py-2 text-2xl">
              <i className="fa-brands text-blue-900 fa-facebook-f"></i>
              <i className="fa-brands text-blue-400 fa-twitter"></i>
              <i className="fa-brands fa-instagram text-pink-600"></i>
            </div>
            <p className="px-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              dignissimos quod maxime libero! Itaque ipsa in dolorum similique
              veniam! Officiis voluptatem unde aperiam sit maxime laboriosam
              nobis officia voluptas id.
            </p>
          </div>
          <div className="w-[100%] card-team md:w-[45%] lg:w-[22%]  rounded-md h-[50%] px-2  py-8 flex flex-col  justify-center items-center shadow-lg">
            <div className="w-[50%]  py-2">
              <img
                className="rounded-full border-[3px] h-[150px] w-[150px]"
                src={CEO}
                alt="ceo"
                srcSet=""
              />
            </div>
            <div className="head">
              <h1>Yusupha Darboe</h1>
              <strong className="text-blue-900 text-center ml-8">
                Develop
              </strong>
            </div>
            <div className="flex space-x-5 py-2 text-2xl">
              <i className="fa-brands text-blue-900 fa-facebook-f"></i>
              <i className="fa-brands text-blue-400 fa-twitter"></i>
              <i className="fa-brands fa-instagram text-pink-600"></i>
            </div>
            <p className="px-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              dignissimos quod maxime libero! Itaque ipsa in dolorum similique
              veniam! Officiis voluptatem unde aperiam sit maxime laboriosam
              nobis officia voluptas id.
            </p>
          </div>
          <div className="w-[100%] card-team md:w-[45%] lg:w-[22%] rounded-md h-[50%] px-2 py-8 flex flex-col  justify-center items-center shadow-lg">
            <div className="w-[50%]  py-2">
              <img
                className="rounded-full border-[3px] h-[150px] w-[150px]"
                src={CEO}
                alt="ceo"
                srcSet=""
              />
            </div>
            <div className="head">
              <h1>Yusupha Darboe</h1>
              <strong className="text-blue-900 text-center ml-8">
                Develop
              </strong>
            </div>
            <div className="flex space-x-5 py-2 text-2xl">
              <i className="fa-brands text-blue-900 fa-facebook-f"></i>
              <i className="fa-brands text-blue-400 fa-twitter"></i>
              <i className="fa-brands fa-instagram text-pink-600"></i>
            </div>
            <p className="px-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              dignissimos quod maxime libero! Itaque ipsa in dolorum similique
              veniam! Officiis voluptatem unde aperiam sit maxime laboriosam
              nobis officia voluptas id.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
