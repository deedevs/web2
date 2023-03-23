import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay, Pagination } from "swiper";
import { Pagination, Autoplay } from "swiper";
import image1 from "../assets/images/p1.png";
//import image2 from "../assets/images/p2.png";
import image3 from "../assets/images/p3.png";
import image4 from "../assets/images/p4.png";
import image5 from "../assets/images/p5.png";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";

const Partner = () => {
  const [view, setView] = useState(2);
  useEffect(() => {
    if (screen.width <= 767) {
      setView(1);
    } else {
      setView(4);
    }
  });
  return (
    <>
      <section
        id="Partner "
        className="Partner"
        //className=" lg:mt-[1400px] md:mt-[1000px] partner lg:py-8  md:py-16 py-8 "
      >
        <div className="py-4 px-4">
          <h1 className="text-center text-blue-900 text-2xl capitalize py-1 md:text-2xl font-bold">
            Our Partner
          </h1>
          <p className="text-center text-[#6c6c6f] md:w-[75%] md:mx-auto md:text-xl md:py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            nemo eveniet sunt tenetur maxime reiciendis minus repellendus, eos
            voluptas magni optio qui animi hic quod fuga quaerat veniam adipisci
            nihil.
          </p>
        </div>
        <Swiper
          className="lg:px-16 md:px-8"
          // install Swiper modules
          autoplay={{
            delay: 1500,
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={view}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="im">
              <img
                className="w-[50%] md:w-[100%] lg:w-[50%]"
                src={image1}
                alt="icon"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="im">
              <img
                className="w-[50%] md:w-[100%] lg:w-[50%]"
                src={image4}
                alt="icon"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="im">
              <img className="w-[50%] md:w-[100%]" src={image3} alt="icon" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="im">
              <img
                className="w-[50%] md:w-[100%]lg:w-[50%]"
                src={image4}
                alt="icon"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="im">
              <img
                className="w-[50%] lg:w-[50%] md:w-[100%]"
                src={image4}
                alt="icon"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="im">
              <img
                className="w-[50%] lg:w-[50%] md:w-[100%]"
                src={image5}
                alt="icon"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="im">
              <img
                className="w-[50%] lg:w-[50%] md:w-[100%]"
                src={image4}
                alt="icon"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Partner;
