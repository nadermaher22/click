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
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const LoginUser = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "auto",
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingInProgress, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const userRef = useRef();

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("Account/Login", {
        PhoneNumber: email,
        Password: password,
        CountryCodeId: "1",
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((res) => {
        setLoading(false);
        setErrMsg(res.response);
        console.log(res);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center flex-column">
            <div className="logo mb-4">
              <img src={Logo} alt="logo0" />
            </div>
            <div className="userLoginImg">
              <img src={UserLoginImg} alt="user login" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="userInfo">
              {loadingInProgress ? (
                <FadeLoader color={"#000"} cssOverride={override} />
              ) : (
                <>
                  <div className="userLoginSocial">
                    <p className="mb-0">Sign in</p>
                    <div className="socialLogin">
                      <img src={Facebook} alt="facebook" />
                      <img src={Google} alt="google" />
                    </div>
                    <p className="or">- OR -</p>
                    <p className="invalid">{errMsg}</p>
                  </div>
                  <div className="userLoginForm">
                    <Form onSubmit={ProceedLogin}>
                      <Form.Group
                        className="mb-3 d-flex align-items-center mb-4"
                        controlId="formBasicEmail"
                      >
                        <AlternateEmailOutlinedIcon className="loginFormIcons me-3" />
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          ref={userRef}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 d-flex align-items-center position-relative"
                        controlId="formBasicPassword"
                      >
                        <LockOutlinedIcon className="loginFormIcons me-3" />

                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <VisibilityOffOutlinedIcon className="eyeIcon position-absolute end-0" />
                      </Form.Group>
                      <Form.Group className="mb-3 float-end ">
                        <Link to="/" className="forgotPassword">
                          Forgot Password?
                        </Link>
                      </Form.Group>
                      <Button className="loginButton" type="submit">
                        Sign in
                      </Button>
                    </Form>
                  </div>
                  <div className="newAccount mt-4">
                    <p>
                      New Account?&nbsp;
                      <Link to="/">Sign up</Link>
                    </p>
                  </div>
                  <div className="expertLink my-5">
                    <img src={Profile} alt="expert profile" className="me-2" />
                    <Link to="/loginexpert">Expert</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
