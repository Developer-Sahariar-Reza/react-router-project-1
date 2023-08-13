import React from "react";
import Lottie from "lottie-react";
import heroAnime from "../assets/animation/hero-anime.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-32 lg:mt-0 container hero">
      <div>
        <h1 className="hero-title">
          Elevate Your Style with Timeless Elegance
        </h1>
        <p className="hero-subtitle">
          Where Modern Trends and Timeless Elegance Converge. Explore a
          Collection that Redefines Your Wardrobe with Unmatched Style and
          Sophistication. Elevate Your Fashion Game Today!
        </p>
        <div className="button-container">
          <button className="common-button">
            <Link to="/shop">Shop Now</Link>
          </button>
          <button className="common-button">
            <Link to="/about">About Us</Link>
          </button>
        </div>
      </div>
      <div>
        <Lottie animationData={heroAnime} loop={true} />
      </div>
    </div>
  );
};

export default Home;
