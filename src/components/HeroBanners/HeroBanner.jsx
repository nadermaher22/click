import React from "react";
import "./HeroBanner.css";
import HeroImg from "../../assests/img/heroImg.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <section className="hero mbCust">
        <div className="container ">
          <div className="row">
            <div className="col-md-5 order2Mob">
              <div className="mt-5 d-flex mt1Mob justMob">
                <p className="m-0 d-flex text-white align-items-left flex-column fs-18 me-1">
                  <span className="mt-2">up</span>
                  <span>to</span>
                </p>
                <p className="m-0 heroPercent">
                  25<span className="percentIcon">%</span>
                </p>
                <p className="heroDisc">discount</p>
              </div>
              <div className="secondLine">
                <p className="m-0 fs-40Mob">Productive with</p>
                <p className="m-0 text-white fs-40Mob">Smart Laptop</p>
              </div>
              <Link to="/shop">
                <button className="orderBtn">
                  <span className="mb-0 oderFont">Order Now</span>
                </button>
              </Link>
            </div>
            <div className="col-md-7 mt-4">
              <div className="heroImg mt-5">
                <img src={HeroImg} alt="hero" className="p30Mob" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
