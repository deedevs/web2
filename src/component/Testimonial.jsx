import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay, Pagination } from "swiper";
import { Pagination, Autoplay } from "swiper";
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img3.jpg";
import image3 from "../assets/images/img2.jpg";
import image4 from "../assets/images/img6.jpg";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const [view, setView] = useState(2);
  useEffect(() => {
    if (screen.width <= 767) {
      setView(1);
    } else {
      setView(2);
    }
  });
  return (
    <>
      <section className=" testimonial py-16  bg-[#f7faff]" id="customer">
        <div className="py-4 px-4">
          <h3 className="text-center text-blue-900 text-lg font-semibold">
            Client opinion
          </h3>
          <h1 className="text-center text-blue-900 text-2xl capitalize py-1">
            what our users say about us
          </h1>
          <p className="text-center text-[#6c6c6f] md:w-[75%] md:mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            nemo eveniet sunt tenetur maxime reiciendis minus repellendus, eos
            voluptas magni optio qui animi hic quod fuga quaerat veniam adipisci
            nihil.
          </p>
        </div>
        <Swiper
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
          <div className="swiper mySwiper container">
            <div className="swiper-wrapper lg:w-[70%] md:w-[50%] md:px-16 md:ml-6 md:mx-auto lg:mx-auto lg:px-32">
              {/* section start */}
              <SwiperSlide className="lg:px-16 md:px-[10px] px-8">
                <div className="swiper-mg lg:px-4 lg:py-6 rounded-md lg:w-[90%] shadow-lg bg-white  ">
                  <p className="md:py-3 py-1 px-2 text-[#6c6c6f] font-serif">
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 md:w-[50px] w-[100%]  fa-solid fa-quote-left"
                    ></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 w-[50px]  fa-solid fa-quote-right px-4"
                    ></i>
                  </p>
                </div>
                <div className="swiper-clinet-data grid grid-cols-2 lg:py-6">
                  <figure className="max-w-[100px] h-[100px] rounded-full border-blue-900">
                    <img
                      className="max-w-[80px] mt-3 md:max-w-[90px] md:h-[90px] h-[80px] md:mt-3 rounded-full border-blue-900"
                      src={image2}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="client-data-details lg:mt-6 md:mt-6 md:left-[140px] md:absolute lg:absolute lg:left-[190px] mt-7 absolute left-[150px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-8">
                <div className="swiper-mg lg:px-4 lg:py-6 rounded-md lg:w-[90%] shadow-lg bg-white  ">
                  <p className="md:py-3 py-1 px-2 text-[#6c6c6f] font-serif">
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 md:w-[50px] w-[100%]  fa-solid fa-quote-left"
                    ></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 w-[50px]  fa-solid fa-quote-right px-4"
                    ></i>
                  </p>
                </div>
                <div className="swiper-clinet-data grid grid-cols-2 lg:py-6">
                  <figure className="max-w-[100px] h-[100px] rounded-full border-blue-900">
                    <img
                      className="max-w-[80px] mt-3 md:max-w-[90px] md:h-[90px] h-[80px]  md:mt-3 rounded-full border-blue-900"
                      src={image2}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="client-data-details lg:mt-6 md:mt-6 md:left-[140px] md:absolute lg:absolute lg:left-[190px] mt-7 absolute left-[150px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-8">
                <div className="swiper-mg lg:px-4 lg:py-6 rounded-md lg:w-[90%] shadow-lg bg-white  ">
                  <p className="md:py-3 py-1 px-2 text-[#6c6c6f] font-serif">
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 md:w-[50px] w-[100%]  fa-solid fa-quote-left"
                    ></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 w-[50px]  fa-solid fa-quote-right px-4"
                    ></i>
                  </p>
                </div>
                <div className="swiper-clinet-data grid grid-cols-2 lg:py-6">
                  <figure className="max-w-[100px] h-[100px] rounded-full border-blue-900">
                    <img
                      className="max-w-[80px] mt-3 md:max-w-[90px] md:h-[90px] h-[80px] md:mt-3 rounded-full border-blue-900"
                      src={image1}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="client-data-details lg:mt-6 md:mt-6 md:left-[140px] md:absolute lg:absolute lg:left-[190px] mt-7 absolute left-[150px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-8">
                <div className="swiper-mg lg:px-4 lg:py-6 rounded-md lg:w-[90%] shadow-lg bg-white  ">
                  <p className="md:py-3 py-1 px-2 text-[#6c6c6f] font-serif">
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 md:w-[50px] w-[100%]  fa-solid fa-quote-left"
                    ></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 w-[50px]  fa-solid fa-quote-right px-4"
                    ></i>
                  </p>
                </div>
                <div className="swiper-clinet-data grid grid-cols-2 lg:py-6">
                  <figure className="max-w-[100px] h-[100px] rounded-full border-blue-900">
                    <img
                      className="max-w-[80px] mt-3 md:max-w-[90px] md:h-[90px] h-[80px] md:mt-3 rounded-full border-blue-900"
                      src={image4}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="client-data-details lg:mt-6 md:mt-6 md:left-[140px] md:absolute lg:absolute lg:left-[190px] mt-7 absolute left-[150px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-8">
                <div className="swiper-mg lg:px-4 lg:py-6 rounded-md lg:w-[90%] shadow-lg bg-white  ">
                  <p className="md:py-3 py-1 px-2 text-[#6c6c6f] font-serif">
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 md:w-[50px] w-[100%]  fa-solid fa-quote-left"
                    ></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 w-[50px]  fa-solid fa-quote-right px-4"
                    ></i>
                  </p>
                </div>
                <div className="swiper-clinet-data grid grid-cols-2 lg:py-6">
                  <figure className="max-w-[100px] h-[100px] rounded-full border-blue-900">
                    <img
                      className="max-w-[80px] mt-3 md:max-w-[90px] md:h-[90px] h-[80px] md:mt-3 rounded-full border-blue-900"
                      src={image3}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="client-data-details lg:mt-6 md:mt-6 md:left-[140px] md:absolute lg:absolute lg:left-[190px] mt-7 absolute left-[150px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-8">
                <div className="swiper-mg lg:px-4 lg:py-6 rounded-md lg:w-[90%] shadow-lg bg-white  ">
                  <p className="md:py-3 py-1 px-2 text-[#6c6c6f] font-serif">
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 md:w-[50px] w-[100%]  fa-solid fa-quote-left"
                    ></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <i
                      style={{ fontSize: "25px" }}
                      className="text-blue-500 w-[50px]  fa-solid fa-quote-right px-4"
                    ></i>
                  </p>
                </div>
                <div className="swiper-clinet-data grid grid-cols-2 lg:py-6">
                  <figure className="max-w-[100px] h-[100px] rounded-full border-blue-900">
                    <img
                      className="max-w-[80px] mt-3 md:max-w-[90px] md:h-[90px] h-[80px] md:mt-3 rounded-full border-blue-900"
                      src={image1}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="client-data-details lg:mt-6 md:mt-6 md:left-[140px] md:absolute lg:absolute lg:left-[190px] mt-7 absolute left-[150px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
