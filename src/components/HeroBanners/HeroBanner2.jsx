import React from "react";
import "./HeroBanner.css";
import { Link } from "react-router-dom";
const HeroBanner2 = () => {
  return (
    <>
      <section className="hero">
        <div className="container mbCust">
          <div className="row">
            <div className="col-md-5 order2Mob afterCircle2 ms-5">
              <div className="mt-5 d-flex mt1Mob justMob">
                <p className="m-0 d-flex text-white align-items-left flex-column fs-18 me-1 ">
                  <span className="mt-2 tablet">up</span>
                  <span className="tablet">to</span>
                </p>
                <p className="m-0 heroPercent tablet">
                  30<span className="percentIcon">%</span>
                </p>
                <p className="heroDisc">discount</p>
              </div>
              <div className="secondLine">
                <p className="m-0 fs-40Mob">Technology with</p>
                <p className="m-0 tablet fs-40Mob">Smart Tablet</p>
              </div>
              <Link to="/shop">
                <button className="orderBtn tabletBtn">
                  <span className="mb-0 oderFont">Learn more</span>
                </button>
              </Link>
            </div>
            {/* <div className="col-md-7">
              <div className="heroImg mt-3 tabletAfter">
                <img src={Tablet} alt="tablet" className="w-100 p30Mob" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroBanner2;
