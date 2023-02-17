import React from "react";
import "./ExpertHome.css";
import ExpertImg from "../../assests/img/expertImg.png";
import Check from "../../assests/img/check.png";
import StarIcon from "@mui/icons-material/Star";

const ExpertHome = () => {
  return (
    <div className="expertCard">
      <div className="expertImg pt-3">
        <img src={ExpertImg} alt="expert" />
      </div>
      <div className="expertName">
        <p>Aly Said</p>
      </div>
      <div className="jobTitle">
        <p>IT Support Expert</p>
      </div>
      <div className="projectsDone">
        <img src={Check} alt="check" />
        <p>20 Done Projects</p>
      </div>
      <div className="expertPrice px-4 mb-3">
        <p className="mb-0 d-flex align-items-center">
          <span className="blueColor me-1">250</span> EGP/hr
        </p>
        <div className="d-flex align-items-center">
          <StarIcon className="starYellow me-1" />
          <span className="fw-bold mt-1">4.5</span>
        </div>
      </div>
    </div>
  );
};

export default ExpertHome;
