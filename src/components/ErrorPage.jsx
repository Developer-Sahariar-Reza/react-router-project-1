import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnime from "../assets/animation/error-page.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <div className="error-animation">
        <Lottie animationData={errorAnime} loop={true} />
      </div>

      <div className="error-message-container">
        <span className="error-message">{status || 404}</span>{" "}
        <span className="error-message">{error?.message}</span>
      </div>

      <div className="button-container mb-5">
        <button className="common-button">
          <Link to="/">Back to Home</Link>
        </button>
        <button className="common-button">
          <Link to="/shop">Back to Shop</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
