import React from "react";
import "./Footer.css";
import logo from "src/assets/images/HTC_logo_White_1.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-detail-container">
          <div className="logo-footer-container">
            <img src={logo} alt="logo-footer" className="logo-footer" />
          </div>

          <div className="detail-content">
            L3E7 MAKES ALL THESE EXHILARATING EXPERIENCES POSSIBLE THROUGH CUTTING-EDGE LOCATION-BASED SERVICES AND
            RENDERING ENGINE.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
