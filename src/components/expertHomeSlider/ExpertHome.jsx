import React from "react";
import "./ExpertHome.css";
import ExpertImg from "../../assests/img/expertImg.png";
import moneyIcon from "../../assests/img/homeExpertMoney.png";
import starIcon from "../../assests/img/homeExpertStar.png";
import checkIcon from "../../assests/img/homeExpertCheck.png";

const ExpertHome = () => {
  return (
    <div className="expertCard ms-4">
      <img src={ExpertImg} alt="expert" className="expertImg" />

      <div className="expertName">
        <p>Aly Said</p>
      </div>
      <div className="jobTitle">
        <p>IT Support Expert</p>
      </div>
      <div className="container">
        <div className="row expertIcons">
          <div className="col-md-4 expertFlex">
            <img src={moneyIcon} alt="icon" />
            <p>250</p>
            <p>EGP/h</p>
          </div>
          <div className="col-md-4 expertFlex">
            <img src={starIcon} alt="icon" />
            <p>4.5</p>
            <p>From 5</p>
          </div>
          <div className="col-md-4 expertFlex">
            <img src={checkIcon} alt="icon" />
            <p>20</p>
            <p>Done Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertHome;
