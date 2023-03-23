import React from "react";
import "../component/footer.css";
const Footer = () => {
  return (
    <section className="bodyy">
      <footer className="">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="http://">Home</a>
          </li>
          <li>
            <a href="http://">Send Money</a>
          </li>
          <li>
            <a href="http://">Recieve Money</a>
          </li>
          <li>
            <a href="http://">Contact</a>
          </li>
          <li>
            <a href="http://">Testimonial</a>
          </li>
        </ul>
        <p>@2021 website footer</p>
      </footer>
    </section>
  );
};

export default Footer;
