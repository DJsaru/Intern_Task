import React from "react";
import "./App.css";
import Cards from "./components/cards";
import Mentor from "./components/mentor";
import CarouselComponent from "./components/carousel";

const App = () => {
  return (
    <>
      <section className="body">
        <div>
          <h1 className="section_first">TEAM PAGE</h1>
        </div>
        <div>
          <h1 className="section_second">Meet Our Mentor</h1>
          <p className="section_second_para">
            Fully dedicated for future scientist
          </p>
        </div>
        <div>
          <Mentor />
        </div>
        <div>
          <h1 className="text__para">
            Learn from Scientist, research scholars from the top institutes in
            the world.
          </h1>
        </div>
        <div>
          <Cards />
        </div>
        <div className="teams-heading">
          <h1> Our </h1>
          <br></br>
          <span>
            Awesome Team
          </span>
        </div>
        <div className="carousel-one">
          <h1>Biology</h1>
        </div>
        <div>
            <CarouselComponent />
        </div>
        <div className="carousel-one">
          <h1>Physics</h1>
        </div>
        <div>
          <CarouselComponent />
        </div>
        <div className="carousel-one">
          <h1>Chemistry</h1>
        </div>
        <div>
          <CarouselComponent />
        </div>
      </section>
    </>
  );
};

export default App;
