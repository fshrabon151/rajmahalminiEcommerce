import React from "react";
import "./body.css";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="container">
          <div className="hero-text">
            <h3>
              <span style={{ fontSize: "45px" }}> Rajmahal Restaurant | </span>
              Online Ordering
            </h3>
            <h2>Your Yummy Fast Food Delivered Fast & Fresh</h2>
            <div className="btn btn-dark mt-3">Order Now</div>
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default Home;
