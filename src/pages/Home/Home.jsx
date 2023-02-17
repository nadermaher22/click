import React, { useEffect } from "react";
import "./Home.css";
import Slider from "react-slick";
import HeroBanner from "../../components/HeroBanners/HeroBanner";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import It from "../../assests/img/it.png";
import Tech from "../../assests/img/tech.png";
import Maintenance from "../../assests/img/maintenance.png";
import Networking from "../../assests/img/networking.png";
import Faq from "../../assests/img/faq.png";
import Software from "../../assests/img/software.png";
import AboutImg from "../../assests/img/aboutImg.png";
import p1 from "../../assests/img/partners/1.png";
import p2 from "../../assests/img/partners/2.png";
import p3 from "../../assests/img/partners/3.png";
import p4 from "../../assests/img/partners/4.png";
import p5 from "../../assests/img/partners/5.png";
import p6 from "../../assests/img/partners/6.png";
import c1 from "../../assests/img/categories/1.jpg";
import c2 from "../../assests/img/categories/2.jpg";
import c3 from "../../assests/img/categories/3.jpg";
import c4 from "../../assests/img/categories/4.jpg";
import HeroImg from "../../assests/img/heroImg.png";

import ShopItem from "../../components/ShopItem/ShopItem";
import HeroBanner2 from "../../components/HeroBanners/HeroBanner2";
import HeroBanner3 from "../../components/HeroBanners/HeroBanner3";
import ExpertHome from "../../components/expertHomeSlider/ExpertHome";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {

  const partnerSettings = {
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  const categoriesSettings = {
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "20px",
  };
  const offersSettings = {
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: "40px",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const expertSettings = {
    infinite: true,
    loop: true,
    speed: 500,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  //Owl Carousel Settings
  const options = {
    items: 1,
    center: true,
    margin: 500,
    responsiveClass: true,
    nav: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
  };

  return (
    <>
    <Navbar />
      {/* hero banner */}
      <div className="heroBanner">
        <OwlCarousel className="owl-theme" loop margin={10} {...options}>
          <HeroBanner />
          <HeroBanner2 />
          <HeroBanner3 />
        </OwlCarousel>
      </div>

      {/* offers */}
      <section className="offers">
        <div className="container position-relative">
          <div className="offersHeading d-flex align-items-center justify-content-center">
            <p className="m-0 text-center">Shop Offers</p>
            <Link className="seeAll" to="/">
              See All
            </Link>
          </div>
        </div>
        <div className="cardsSlide">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Slider {...offersSettings}>
                  <ShopItem />
                  <ShopItem />
                  <ShopItem />
                  <ShopItem />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about ClickTick */}
      <section className="about mb-5 mb1Mob">
        <div className="heading mt-5">
          <p className="m-0 d-flex justify-content-center align-items-center">
            About Clicktick
          </p>
        </div>
        <div className="container mt-5 mt1Mob">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImg} alt="about" className="about-img" />
            </div>
            <div className="col-md-6">
              <div className="aboutRight">
                <p className="firstLine">
                  Clicktick Provides all support that's help your business
                </p>
                <p className="clickDetails">
                  Technological <span>devises</span> for your office, company
                  and your business.
                </p>
                <p className="clickDetails">
                  Technical <span>Services</span> to Support your company and
                  your business.
                </p>
                <p className="clickDetails">
                  Experienced <span>Exports</span> to Support your Technical
                  issues and your problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="services mb-5">
        <div className="servicesHeading">
          <p>Services</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="servicesCard">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={It} alt="it" className="m-auto servicesImg" />
                </div>
                <div className="headingCard mt-2">IT</div>
                <div className="detailsCard mt-2">
                  <p className="px-4">
                    Website Development Website Developme Website Development
                    Website Development Website
                  </p>
                </div>
              </div>
              <div className="servicesCard mt-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={Networking}
                    alt="Networking"
                    className="m-auto servicesImg"
                  />
                </div>
                <div className="headingCard mt-2">Networking</div>
                <div className="detailsCard mt-2">
                  <p className="px-4">
                    Website Development Website Developme Website Development
                    Website Development Website
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="servicesCard">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={Tech} alt="Tech" className="m-auto servicesImg" />
                </div>
                <div className="headingCard mt-2">Tech</div>
                <div className="detailsCard mt-2">
                  <p className="px-4">
                    Website Development Website Developme Website Development
                    Website Development Website
                  </p>
                </div>
              </div>
              <div className="servicesCard mt-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={Faq} alt="FAQ" className="m-auto servicesImg" />
                </div>
                <div className="headingCard mt-2">FAQ Service</div>
                <div className="detailsCard mt-2">
                  <p className="px-4">
                    Website Development Website Developme Website Development
                    Website Development Website
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="servicesCard">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={Maintenance}
                    alt="Maintenance"
                    className="m-auto servicesImg"
                  />
                </div>
                <div className="headingCard mt-2">Maintenance</div>
                <div className="detailsCard mt-2">
                  <p className="px-4">
                    Website Development Website Developme Website Development
                    Website Development Website
                  </p>
                </div>
              </div>
              <div className="servicesCard mt-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={Software}
                    alt="Software"
                    className="m-auto servicesImg"
                  />
                </div>
                <div className="headingCard mt-2">Software</div>
                <div className="detailsCard mt-2">
                  <p className="px-4">
                    Website Development Website Developme Website Development
                    Website Development Website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* recommended experts */}
      <div className="experts mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container position-relative mx-3 mx0Mob">
                <div className="expertsHeading d-flex align-items-center justify-content-center">
                  <p className="m-0 text-center recomExperts">
                    Recommended Experts
                  </p>
                  <Link className="seeAll expertMob" to="/exports">
                    See All
                  </Link>
                </div>
              </div>
              <div>
                <Slider {...expertSettings}>
                  <ExpertHome />
                  <ExpertHome />
                  <ExpertHome />
                  <ExpertHome />
                  <ExpertHome />
                  <ExpertHome />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <section className=" homePartners mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Partners */}
              <h6 className="clicktitle">Partners</h6>
              <Slider {...partnerSettings}>
                <Link to="#">
                  <img src={p1} alt="" />
                </Link>
                <Link to="#">
                  <img src={p2} alt="" />
                </Link>
                <Link to="#">
                  <img src={p3} alt="" />
                </Link>
                <Link to="#">
                  <img src={p4} alt="" />
                </Link>
                <Link to="#">
                  <img src={p5} alt="" />
                </Link>
                <Link to="#">
                  <img src={p6} alt="" />
                </Link>
                <Link to="#">
                  <img src={p1} alt="" />
                </Link>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      {/* <section className="homeCategories mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className="clicktitle">Categories</h6>
              <Slider {...categoriesSettings}>
                <Link to="#">
                  <img src={c1} alt="" />
                  <p>Laptop</p>
                </Link>
                <Link to="#">
                  <img src={c2} alt="" />
                  <p>Tablet</p>
                </Link>
                <Link to="#">
                  <img src={c3} alt="" />
                  <p>PC</p>
                </Link>
                <Link to="#">
                  <img src={c4} alt="" />
                  <p>Access Point</p>
                </Link>
                <Link to="#">
                  <img src={c1} alt="" />
                  <p>Laptop 2</p>
                </Link>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
