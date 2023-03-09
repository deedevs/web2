import React, { Component } from "react";
import Logoicon from "../assets/logo.jpeg";
import "../component/header.css";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <nav className="bg-slate-50 ">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <img className="w-[210px]  ml-4" src={Logoicon} alt="" srcset="" />
          </Link>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="send"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Send Money
                </Link>
              </li>
              <li>
                <Link
                  to="receive"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Receive Money
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </nav>
        <Link
          className="bg-blue-800 fixed   ml-4 mt-[550px] w-10 h-8 px-8 py-8 rounded-md "
          to="navbar"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <i className=" text-white mt-[-20px] fa-solid ml-[-25px] fa-arrow-up z-90 cursor-pointer"></i>
        </Link>
      </>
    );
  }
}

export default Header;
