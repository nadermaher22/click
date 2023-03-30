import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assests/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ProfilePic from "../../assests/img/profile.png";
import Favorite from "../../assests/img/fav.png";
import Cart from "../../assests/img/cart.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

import Flag from "react-world-flags";

const Navbar = () => {
  const navigate = useNavigate();
  const [tokenvalue, setsessionn] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    setsessionn(tokenString);
  }, []);

  const logoutFunc = () => {
    localStorage.setItem("token", "loggedOut");
    setsessionn("loggedOut");
    navigate("/loginuser");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white maxHeight p0Mob">
      <div className="container-fluid p-0Mob">
        <div>
          <Link className="navbar-brand ms-2" to="/">
            <img src={Logo} alt="logo" className="logoImgMob" />
          </Link>
        </div>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse bg-white navBarCust"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-4Mob mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="services/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exports">
                Experts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            {tokenvalue === "loggedOut" ? (
              <ul className="list-unstyled d-flex align-items-center justify-conent-center mb-0">
                <li className="nav-item d-flex align-items-center justify-conent-center">
                  <p className="m-0 me-2">Deliver to</p>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="me-2"
                  >
                    <Flag code="eg" height="16" />
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="text-center">
                      Choose your delivery location
                      <Dropdown className="mt-3">
                        <Dropdown.Toggle id="dropdown-basic">
                          Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <Flag code="eg" height="16" />
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <Flag code="usa" height="16" />
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <Flag code="UA" height="16" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown className="mt-3">
                        <Dropdown.Toggle id="dropdown-basic">
                          City
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            city 1
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            city 2
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            city 3
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/loginuser">
                    Login
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="d-flex align-items-center gap10 iconsMob">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <img src={Favorite} alt="Favorite" />
                  </Link>
                </li>
                <li className="nav-item position-relative">
                  <Link className="nav-link cart" to="/">
                    <img src={Cart} alt="Cart" />
                    <span className="cartNumber">2</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src={ProfilePic}
                      alt="Profile"
                      className="profilePic"
                    />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="/" className="dropdown-item">
                      Reports
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <span className="dropdown-item" onClick={logoutFunc}>
                      Logout
                    </span>
                  </div>
                </li>
              </div>
            )}
          </div>
        </div>

        <div></div>
      </div>
    </nav>
    // <div className="container-fluid px-5 navWidth">
    //   <nav className="navbar navbar-expand-lg navbar-light">
    //     <Link to="/">
    //       <img src={Logo} alt="logo" />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="/navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div
    //       className="collapse navbar-collapse d-flex justify-content-end align-items-center"
    //       id="navbarSupportedContent"
    //     >
    //       <ul className="list-unstyled d-flex align-items-center my-2 my-lg-0 gap20 navList">
    //         <Link className="link" to="/">
    //           <li>Home</li>
    //         </Link>
    //         <Link className="link" to="/shop">
    //           <li>Shop</li>
    //         </Link>
    //         <Link className="link" to="/services">
    //           <li>Services</li>
    //         </Link>
    //         <Link className="link" to="/exports">
    //           <li>Expert</li>
    //         </Link>
    //         <Link className="link" to="/about-us">
    //           <li>About Us</li>
    //         </Link>
    //         <Link className="link" to="/contact-us">
    //           <li>Contact Us</li>
    //         </Link>
    //         <div className="icons gap20 d-flex justify-content-end align-items-center ms-4">
    //           <img src={Favorite} alt="Favorite" />
    //           <div className="cart">
    //             <img src={Cart} alt="Cart" />
    //             <span>2</span>
    //           </div>
    //           <ul className="nav navbar-nav ms-auto">
    //             <li className="nav-item dropdown">
    //               <Link
    //                 to="/"
    //                 className="nav-link dropdown-toggle"
    //                 data-bs-toggle="dropdown"
    //               >
    //                 <img
    //                   src={ProfilePic}
    //                   alt="Profile"
    //                   className="profilePic"
    //                 />
    //               </Link>
    //               <div className="dropdown-menu dropdown-menu-end">
    //                 <Link to="/" className="dropdown-item">
    //                   Reports
    //                 </Link>
    //                 <Link to="/" className="dropdown-item">
    //                   Settings
    //                 </Link>
    //                 <div className="dropdown-divider"></div>
    //                 <Link to="/" className="dropdown-item">
    //                   Logout
    //                 </Link>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
