import React from "react";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <section className="hero">
        <div className="container mbCust">
          <div className="row">
            <div className="col-md-7 order2Mob afterCircle3 ms-5">
              <div className="mt-5 d-flex mt1Mob justMob">
                <p className="m-0 d-flex text-white align-items-left flex-column fs-18 me-1">
                  <span className="mt-2">up</span>
                  <span>to</span>
                </p>
                <p className="m-0 heroPercent">
                  20<span className="percentIcon">%</span>
                </p>
                <p className="heroDisc">discount</p>
              </div>
              <div className="secondLine">
                <p className="m-0 fs-40Mob">Performance with</p>
                <p className="m-0 text-white fs-40Mob">Smart PC</p>
              </div>
              <Link to="/shop">
                <button className="orderBtn">
                  <span className="mb-0 oderFont">Learn More</span>
                </button>
              </Link>
            </div>
            {/* <div className="col-md-7">
              <div className="heroImg mt-5 macAfter macImg">
                <img src={Mac} alt="hero" className="macImg p30Mob" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
