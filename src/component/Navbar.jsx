import React, { useEffect, useState } from "react";
import LogoIcon from "../assets/images/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [items, setItem] = useState(false);

  function handlemenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    var navBar = document.querySelector("header");
    const icon = document.querySelector(".fas");
    const links = document.querySelectorAll("a");

    var backTop;
    window.addEventListener("scroll", function () {
      backTop = window.pageYOffset;

      if (backTop >= 10) {
        navBar.style.backgroundColor = "#fff";
        navBar.style.position = "fixed";
        icon.style.color = "blue";

        // navitem.style.color = "blue";
        setItem(true);
      } else {
        //navBar.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        icon.style.color = "blue";
        links.style.color = "darkblue";

        //navitem.style.color = "#fff";
        setItem(false);
      }
    });
  }, []);

  return (
    <>
      <header className="relative space-x-[50%]  left-0 top-0 h-[88px] z-10  bg-white md:h-[74px] w-full shadow-lg">
        <div className="container w-full flex md:flex md:flex-row items-center md:space-x-32  relative h-full py-[15px] px-auto">
          <img
            style={{ height: "90px", marginLeft: "20px" }}
            src={LogoIcon}
            alt=""
            srcSet=""
          />

          <nav className="primary-menu text-white h-[60%] md:top-[-50px]">
            <div className="mobile md:hidden ml-[225px]">
              {!open ? (
                <i
                  onClick={handlemenu}
                  className="fas fa-bars text-blue-900 w-4  text-2xl"
                ></i>
              ) : (
                <i
                  onClick={closeMenu}
                  className="fas fa-times text-blue-900 w-4  text-2xl"
                ></i>
              )}
            </div>
            <ul
              style={items ? { color: "blue" } : { color: "#fff" }}
              className={`${
                open ? "flex" : "hidden"
              }  flex-col max-h-[500px] py-[10] px-0 absolute top-[100%]  md:h-6 md:top-[-20px] md:py-4  md:flex md:flex-row left-0 w-full bg-[#256be6] text-white text-left space-y-8 md:justify-end md:bg-transparent h-[50vh]`}
              id="menu"
            >
              <li className="mt-8">
                <Link
                  isActive="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block capitalize py-[5px] px-[25px] relative hover:cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  isActive="active"
                  to="send"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  id="item"
                  className="block capitalize py-[5px] px-[25px] relative"
                  href=""
                >
                  Send Money
                </Link>
              </li>
              <li>
                <Link
                  isActive="active"
                  to="charge"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  id="item"
                  className="block capitalize py-[5px] px-[25px] relative hover:cursor-pointer"
                >
                  Recieve Money
                </Link>
              </li>
              <li>
                <Link
                  isActive="active"
                  to="customer"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  id="item"
                  className="block capitalize py-[5px] px-[25px] relative hover:cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li className="block">
                <Link
                  isActive="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  id="item"
                  className="block capitalize py-[5px] px-[25px] relative hover:cursor-pointer"
                >
                  Contact-us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
