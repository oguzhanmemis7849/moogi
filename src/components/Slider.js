import React from "react";
import "./All.css";
import slider1 from "../images/slider-1.png";
import slider2 from "../images/slider-2.png";
import SearchBar from "./SearchBar";

import Carousel from "react-bootstrap/Carousel";
import Categories from "./Categories";

const Slider = () => {
  return (
    <div id="slider">
      <div className="container" style={{padding:"0"}}>
        <div className="row" style={{ padding: "0", margin: "0" }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 leftLine">
            <SearchBar />
            <Categories/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
            <Carousel>
              <Carousel.Item>
                <img className="slider" src={slider1} alt="Slider 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="slider" src={slider2} alt="Slider 2" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
