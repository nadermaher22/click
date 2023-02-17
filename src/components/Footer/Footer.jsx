import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FooterImg from "../../assests/img/footerMobile.png";
import GooglePlay from "../../assests/img/GooglePlay.png";
import AppStore from "../../assests/img/AppStore.png";
import FooterImg2 from "../../assests/img/FooterLogo.png";
import Vector from "../../assests/img/Vector.png";
import Phone from "../../assests/img/Phone.png";
import Twitter from "../../assests/img/Twitter.png";
import Facebook from "../../assests/img/Facebook.png";
import Youtube from "../../assests/img/Youtube.png";
import Linkedin from "../../assests/img/Linkedin.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left mt-3">
              <img
                src={FooterImg}
                alt="footerimg"
                className="w-100 footerImgMob"
              />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="right">
              <div className="rightText">
                <p>
                  <span className="percent">10%</span>
                  <br></br>Discount
                  <br></br> On Your
                  <span className="greenColor">&nbsp;First Order</span>
                  <br></br> In
                  <span className="greenColor font-weight-bold">
                    &nbsp;Clicktick&nbsp;
                  </span>
                  <span className="fw-bold">app</span>
                </p>
              </div>
              <div className="rightText">
                <div className="fs-24 text-white mb-4 mt-4 mb-1">
                  Download Now
                </div>
                <div className="downloadBut">
                  <Link to="/">
                    <img
                      src={GooglePlay}
                      alt="Google Play Download"
                      className="me-4"
                    />
                  </Link>
                  <Link to="/">
                    <img src={AppStore} alt="App Store Download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondFooter mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 px-0">
              <div className="left p-0Mob ps-5">
                <img src={FooterImg2} alt="logo" className="mt-5 ms-4 footer2ImgMob" />
                <div className="socialMedia d-flex align-items-center flex-row m-0Mob gap-3 mt-5 ms-4">
                  <Link to="/">
                    <img src={Twitter} alt="Twitter" />
                  </Link>
                  <Link to="/">
                    <img src={Facebook} alt="Facebook" />
                  </Link>
                  <Link to="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </Link>
                  <Link to="/">
                    <img src={Youtube} alt="Youtube" />
                  </Link>
                </div>
                <div className="brandName ms-4">Clicktick CO</div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row mt-3 ms-5 ms0Mob">
                <div className="col-md-6 p-5 p2Mob">
                  <h5 className="text-white mb-4">Quick Links</h5>
                  <ul className="list-unstyled text-white ">
                    <Link to="/shop" className="text-decoration-none">
                      <li className="listColor ">Shopping</li>
                    </Link>
                    <Link to="/services" className="text-decoration-none">
                      <li className="mt-4 listColor">Our Services</li>
                    </Link>
                    <Link to="/exports" className="text-decoration-none">
                      <li className="mt-4 listColor">Our Experts</li>
                    </Link>
                    <Link to="/about-us" className="text-decoration-none">
                      <li className="mt-4 listColor">About Company</li>
                    </Link>
                    <Link to="/contact-us" className="text-decoration-none">
                      <li className="mt-4 listColor">Contacts</li>
                    </Link>
                  </ul>
                </div>
                <div className="col-md-6 p-5 p2Mob">
                  <h5 className="text-white mb-4">Contact</h5>
                  <ul className="list-unstyled text-white">
                    <li className="d-flex align-items-center mt-4">
                      <img src={Vector} alt="envelope" className="me-3" />
                      Info@Clicktick.com
                    </li>
                    <li className="d-flex align-items-center mt-4">
                      <img src={Phone} alt="phone" className="me-3" />
                      19017
                    </li>
                    <li className="d-flex align-items-center mt-4">
                      <img src={Phone} alt="phone" className="me-3" />
                      +2 265 4928 46
                    </li>
                  </ul>
                </div>
              </div>
              <div className="copyright px-5 ms-5">
                Copyright © 2023 All right reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
