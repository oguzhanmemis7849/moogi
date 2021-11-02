import React from "react";
import "./All.css";
import headerLogo from "../images/header-logo.png";
import sepet from '../images/sepet-icon.svg';
import account from '../images/account-icon.svg';
import { Button } from "reactstrap";

const MoogiBar = () => {
  return (
    <div id="moogi">
      <div className="row" style={{ padding: "0", margin: "0" }}>
        <div className="moogiBack">
          <div className="container">
            <img className="headerLogo" src={headerLogo} alt="headerLogo" />
            <Button className="backButton">
              <img className="icon" src={sepet} alt="sepet" />
            </Button>
            <Button className="backButton2">
              <img className="icon" src={account} alt="account" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoogiBar;
