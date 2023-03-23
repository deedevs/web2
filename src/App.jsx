import { useState } from "react";

import "./App.css";
import Charges from "./component/charges";
import Contact from "./component/Contact";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import OverView from "./component/OverView";
import Partner from "./component/Partner";
import Payment from "./component/Payment";
import Speciality from "./component/Speciality";
import Team from "./component/Team";
import Testimonial from "./component/Testimonial";
import Transfer from "./component/Transfer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OverView />
      <Transfer />
      <Charges />
      <Payment />
      {/* <Features /> */}

      <Partner />
      <Speciality />
      <Testimonial />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
