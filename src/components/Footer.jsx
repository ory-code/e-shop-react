import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../style/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer__social__media">
          <h2>Join us !</h2>
          <div className="icn__footer">
          <LinkedInIcon className="icn" />
          <GitHubIcon className="icn" />
          </div>
          
        </div>
        <div className="footer__right">
          <ul>
            <li>ABOUT US</li>
            <li>CAREER</li>
            <li>RGPD</li>
            <li>DELIVERY </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
