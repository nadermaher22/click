import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assests/img/logo.png";
import VerifySMS from "../../assests/img/verifySMS.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OtpInput from "react18-input-otp";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center flex-column">
            <div className="logo mb-4">
              <img src={Logo} alt="logo" />
            </div>
            <div className="userLoginImg mt-5">
              <img src={VerifySMS} alt="user login" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="userInfo">
              <div className="userLoginSocial">
                <p className="mb-0 ">Enter your Code</p>
                <p className="mb-0 vetifyP mt-5">**********0470</p>
                <p className="mb-0 vetifyP mt-2">
                  We have sent you a SMS with 6 digit
                </p>
              </div>
              <div className="userLoginForm">
                <Form>
                  <OtpInput
                    containerStyle="otpNumbers"
                    inputStyle="otpNumber"
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                    shouldAutoFocus
                    separator={<span>&nbsp;</span>}
                  />
                  <div className="resendOTP">
                    <p className="mb-0">Resend OTP in 30 sec</p>
                    <Link to="">Resend</Link>
                  </div>

                  <div className="textSMS"></div>
                  <Button className="loginButton" type="submit">
                    Verify
                  </Button>
                </Form>
              </div>
              <div className="newAccount mt-4">
                <p>
                  Joined before?&nbsp;
                  <Link to="/">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
