import React from "react";
import "./Hero.css";
import priya from "../assets/hero-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-con">
        <img src={priya} />
        <div className="text-con">
          <h6>BEAUTY.CARE.CONFIDENCE</h6>
          <h2>YOUR SKIN</h2>
          <h2>YOUR GLOW</h2>
          <p>
            Clean, effective skincare made with natural ingredients to bring out
            your skins natural glow
          </p>
          <a href="#product">
            <button>SHOP NOW</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
