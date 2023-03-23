import React, { useState, useEffect } from "react";

const Contact = () => {
  const [view, setView] = useState(0);
  useEffect(() => {
    if (screen.width <= 767) {
      setView(36);
    } else if (screen.width >= 1024) {
      setView(40);
    } else {
      setView(50);
    }
  });
  return (
    <section className="contact py-8" id="contact">
      <div className=" md:flex lg:flex lg:space-x-[30%] lg:w-1/2 lg:mx-auto">
        <div className="cont md:mt-8 lg:w-full lg:ml-[-200px]">
          <h1 className="text-center text-white font-bold py-2 px-4 text-2xl uppercase lg:w-full lg:text-left">
            Our Address
          </h1>
          <ul className="py-2 px-4 flex flex-col space-y-4 w-full lg:space-y-4 md:space-y-8 lg:w-full lg:ml-[-50px]">
            <li className="lg:w-full">
              <i className="fa-solid fa-phone-volume text-[28px]"></i>
              <span className="px-3 lg:w-full">220 3345456</span>
            </li>
            <li>
              <i className="fa-solid fa-house text-[28px]"></i>
              <span className="px-3 ">Serrekunda</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot text-[28px] text-red-500"></i>
              <span className="px-3">Kairaba Avenue Road, P.O.Box</span>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="form py-2 px-2  ">
          <form
            className=" shadow-lg bg-[#f7faff] min-h-[40%] py-4 lg:w-[400px]"
            action=""
          >
            <div className="py-4 px-4">
              <h1
                className="text-2xl uppercase
            font-bold text-blue-900 text-center font-seri"
              >
                contact us
              </h1>
              <p className="text-center ">Let's Get In Touch</p>
            </div>
            <div className="py-2 flex flex-col md:ml-[23px] ml-[15px] text-blue-900 font-sans">
              <label className="px-2 font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="md:w-[417px] w-[310px] lg:w-[350px] h-[40px] rounded-sm outline-none indent-3 border"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your name"
              />
            </div>
            <div className="py-2 flex flex-col ml-[15px] md:ml-[23px] text-blue-900 font-sans">
              <label className="px-2 font-seri font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="md:w-[417px] lg:w-[350px] w-[310px] h-[40px] rounded-sm outline-none indent-3 border font-serif"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your email"
              />
            </div>
            <div className="mt-4 md:px-[56px] py-4">
              <textarea
                className="mt-[-4px] ml-[15px] pb-2 focus:outline-none indent-3 border md:ml-[-29px]"
                name="message"
                id="message"
                cols={view}
                rows="7"
                placeholder="message"
              ></textarea>
            </div>
            <div className="md:ml-[-9px]">
              <button className="bg-blue-900 hover:bg-blue-200 active:bg-orange-700 focus:outline-none focus:ring focus:ring-green-500  text-white md:w-[416px] h-[40px] md:ml-[50px] md:px-4 rounded-md w-[310px] ml-[15px] lg:w-[350px] lg:ml-[32px]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
