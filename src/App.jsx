import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import WhyUs from "./component/WhyUs";
import Specialiy from "./component/Specialiy";
import Charge from "./component/Charge";
import OnlinePayment from "./component/OnlinePayment";
import Speciality from "./component/Speciality";
import Testimony from "./component/Testimony";

function App() {
  return (
    <div className="ml-2 w-[100%]">
      <Header />

      <Home />
      <Specialiy />

      <WhyUs />
      <Charge />
      <OnlinePayment />
      <Speciality />

      <div className="z-50">
        <Testimony />
      </div>

      <Footer />
    </div>
  );
}

export default App;
