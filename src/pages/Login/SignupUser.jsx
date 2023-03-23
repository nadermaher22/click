import React, { useRef, useState, useEffect, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assests/img/logo.png";
import UserLoginImg from "../../assests/img/loginUser.png";
import Facebook from "../../assests/img/facebook-login.png";
import Profile from "../../assests/img/profile.png";
import Google from "../../assests/img/google-login.png";
import CheckSuccess from "../../assests/img/checkSuccess.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const LoginUser = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "auto",
  };
  const navigate = useNavigate();
  const [loadingInProgress, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const userRef = useRef();
  const errRef = useRef();
  const [passwordShown, setPasswordShown] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    phone: "",
    CountryCode: "1",
  });

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://sbtechnology-001-site2.atempurl.com/api/Account/Register", {
        FullName: values.name,
        UserName: values.name,
        Email: values.email,
        PhoneNumber: values.phone,
        Password: values.pass,
        CountryCodeId: values.CountryCode,
      })
      .then((res) => {
        localStorage.setItem("token", "loggedIn");
        setRegisterSuccess(true);
      })
      .catch((res) => {
        setLoading(false);
        setErrMsg(res.response.data.Message);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center flex-column">
            <div className="logo mb-4">
              <img src={Logo} alt="logo" />
            </div>
            <div className="userLoginImg">
              <img src={UserLoginImg} alt="PhoneNumber login" />
            </div>
          </div>
          {registerSuccess ? (
            <div className="col-md-6">
              <div id="card" className="animated animate__fadeIn">
                <img
                  src={CheckSuccess}
                  alt="success"
                  className="w-100 sucImg"
                />
                <div id="upper-side">
                  <circle
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="5"
                    stroke-miterlimit="10"
                    cx="109.486"
                    cy="104.353"
                    r="32.53"
                  />
                  <h3 id="status">Success</h3>
                </div>
                <div id="lower-side">
                  <p id="message">
                    Congratulations, your account has been successfully created.
                  </p>
                  <Link to="/LoginUser" id="contBtn">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-6">
              <div className="userInfo">
                <div className="userLoginSocial">
                  <p className="mb-0">Sign up</p>
                  <div className="socialLogin">
                    <img src={Facebook} alt="facebook" />
                    <img src={Google} alt="google" />
                  </div>
                  <p className="or">- OR -</p>
                  <p className="invalid">{errMsg}</p>
                </div>
                <div className="userLoginForm">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 d-flex align-items-center mb-4">
                      <AccountCircleOutlinedIcon className="loginFormIcons me-3" />
                      <Form.Control
                        type="text"
                        htmlFor="user name"
                        placeholder="User name"
                        id="FullName"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) =>
                          setValues({ ...values, name: e.target.value })
                        }
                        required
                        aria-describedby="uidnote"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center mb-4">
                      <AlternateEmailOutlinedIcon className="loginFormIcons me-3" />
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center position-relative">
                      <LockOutlinedIcon
                        className="loginFormIcons me-3"
                        onClick={togglePassword}
                      />

                      <Form.Control
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        id="Password"
                        onChange={(e) =>
                          setValues({ ...values, pass: e.target.value })
                        }
                        required
                        aria-describedby="pwdnote"
                      />
                      <VisibilityOffOutlinedIcon className="eyeIcon position-absolute end-0" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center mb-4">
                      <LocalPhoneOutlinedIcon className="loginFormIcons me-3" />

                      <PhoneInput
                        country={"eg"}
                        onlyCountries={["eg", "sa", "ae"]}
                        disableCountryCode
                        value={setValues.phone}
                        enableAreaCodes={true}
                        placeholder={"15847866"}
                        onChange={(phone) => setValues({ ...values, phone })}
                      />
                    </Form.Group>

                    <Button className="loginButton mt-4" type="submit">
                      Continue
                    </Button>
                  </Form>
                  {/* <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => SetPhoneNumber(e.target.value)}
                      value={PhoneNumber}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote"></p>
  
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={Password}
                      required
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
  
                    <button>Sign Up</button>
                  </form> */}
                </div>
                <div className="newAccount mt-4">
                  <p>
                    Joined before?&nbsp;
                    <Link to="/">Sign in</Link>
                  </p>
                </div>
                <div className="my-5 otherLogin">
                  <div className="expertLink">
                    <img src={Profile} alt="expert profile" className="me-3" />
                    <Link to="/">Expert</Link>
                  </div>
                  <div className="expertLink filterImg">
                    <img src={Profile} alt="expert profile" className="me-3" />
                    <Link to="/">Guest</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
