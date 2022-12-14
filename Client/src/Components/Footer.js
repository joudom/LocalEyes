import React from "react";
import {FaGithub, FaSearchDollar} from 'react-icons/fa'
const Footer = () => {
  return (
    <div
      className="footer" 
      style={{marginTop: "-15px", marginBottom: "-15px"}}
      >
      <div>
        <div className="footer-content">
          <div className="footer-brand">
            <h3
              style={{
                fontFamily: "Trebuchet MS",
                fontSize: "2em",
              }}
            >
                          LocalEyes
                          <FaSearchDollar/>
            </h3>
          </div>
          <p>
            LocalEyes is a quick click away to finding the best deals in your
            local shops.
          </p>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Register</p>
            </div>
            <div>
              <b>For Deal Seekers</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
                          <div>< FaGithub/></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
