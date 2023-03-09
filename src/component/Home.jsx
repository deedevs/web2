import React from "react";
import "../component/home.css";

const Home = () => {
  return (
    <div id="home" className="home-page relative h-[50vh] md:h-[60vh] ">
      <div className="ovaley absolute md:w-[100%] md:mt-[-1px] md:pt-8 bg-blue-800 opacity-50 h-[90vh] z-0 md:h-[100%]"></div>
      <div className=" md:py-32 md:px-32 relative md:text-center py-4 px-2 mt-4 ">
        <h1
          style={{
            animationDelay: "2s",
            // animationIterationCount: "3",
            animationPlayState: "ease-in",
          }}
          className="text-4xl md:text-6xl h1-text z-[1] text-center font-bold opacity-100 uppercase animated zoomIn d-none d-md-block"
        >
          We deliver best services
        </h1>
        <p
          style={{
            animationDelay: "3s",

            animationPlayState: "ease-in",
          }}
          className="md:w-[50%] px-8 md:py-4 text-white md:ml-[350px] animated bounceInRight "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero
          placeat pariatur doloribus aut officiis vel assumenda mollitia iste
          autem aspernatur minima voluptatem iusto in nulla itaque, eum alias
          quibusdam. autem aspernatur minima voluptatem iusto in nulla itaque,
          eum alias quibusdam.
        </p>

        <div className="btn mt-8 px-4">
          <button
            style={{ animationDelay: "3s" }}
            className="py-2 px-2 w-32 animated bounceInRight bg-black text-blue-800 rounded-md"
          >
            Get in toch
          </button>
          <button className="py-2 px-2 w-32 bg-bg-main text-white ml-8 rounded-md">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
