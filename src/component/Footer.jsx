import React from "react";
import Logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="main md:w-[100%] h-[77vh]   md:px-4 px-4 md:py-4 absolute md:h-[40vh] md:bottom-[-3850px] "
      >
        <div className="footer-cont md:flex md:justify-between md:px-32">
          <div className="md:w-[20%]">
            <div className="img-wrapper">
              <img className="w-64 h-32" src={Logo} alt="" srcset="" />
            </div>
            <p className="md:py-2 py-4">
              Welcome to the leading company delivering services that combine
              quality, reliability and compliance!
              <span>follow us</span>
            </p>
          </div>
          <div className="">
            <h1 className="md:ml-[4rem]  md:pb-4 md:mt-[10px] font-bold text-2xl md:absolute">
              Navigation
              <hr className="md:w-9 text-bg-main md:px-2" />
            </h1>
            <div className="md:flex text-bg-main">
              <div className="flex space-x-6 md:flex-col md:my-8 md:px-4 md:py-4 ">
                <a className="py-2 md:ml-6" href="http://">
                  About
                </a>
                <a className="py-2 " href="http://">
                  Service
                </a>
                <a className="py-2" href="http://">
                  Testimonial
                </a>
                <a className="py-2" href="http://">
                  About
                </a>
              </div>
              <div className="flex space-x-4 md:flex-col md:my-8 md:px-4 md:py-4 md:ml-6 text-blue-800 capitalize">
                <a className="py-2 text-blue-300" href="http://">
                  Service
                </a>
                <a className="py-2" href="http://">
                  Testimonial
                </a>
                <a className="py-2" href="http://">
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h1 className="text-2xl md:py-2 md:px-2 font-bold capitalize">
              contact info
            </h1>
            <hr />
            <ul className="md:mt-4 md:py-3">
              <li>
                <i className="fa-solid fa-phone py-3"></i>
                <span className="py-3">(220) 4555677</span>
              </li>
              <li>
                <i className="fa-regular fa-envelope py-3 "></i>
                <span className="py-3">info@demolink.org</span>
              </li>
              <li>
                <i className="fa-regular fa-clock py-3"></i>
                <span className="py-3">Mon - Sat: 9:00 - 18:00</span>
              </li>
              <li>
                <i className="fa-solid fa-location-dot py-3"></i>
                <span className="py-3">267 Park Avenue New York, NY 90210</span>
              </li>
            </ul>
          </div>
          <div className="dm:ml-[-20px]">
            <h1 className="text-2xl py-2 px-2 font-bold capitalize">
              Follow us
            </h1>
            <div className="links md:flex md:justify-between md:mt-8">
              <a href="http://">
                <i class="fa-brands fa-twitter text-blue-600"></i>
              </a>
              <a href="http://">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="http://">
                <i class="fa-brands fa-youtube text-red-400"></i>
              </a>
              <a href="http://">
                <i class="fa-brands fa-instagram text-pink-200"></i>
              </a>
            </div>
          </div>
        </div>
        <footer className="text-center py-4 md:w-full absolute bg-bg-main text-white w-[360px] ml-[-10px] ">
          &copy; 2023 Mike & Joe's Financial Services
        </footer>
      </div>
    </>
  );
};

export default Footer;
