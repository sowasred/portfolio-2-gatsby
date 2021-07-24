import { Link } from "gatsby";
import React from "react";

import { SiFacebook,SiLinkedin } from 'react-icons/si';
import { VscTwitter, VscGithub } from 'react-icons/vsc';

import gatsby from "../images/gatsby.png";

const Footer = () => (
  <footer className="footer">
    <ul className="social-icons">
      <li>
        <a
          target="_blank"
          href="https://www.facebook.com/muldurozan/"
          className="social-icon fb"
        >
          <SiFacebook />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ozanm/"
          className="social-icon linkedin"
        >
          <SiLinkedin />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/ozanmuldur1"
          className="social-icon twitter"
        >
          <VscTwitter />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/sowasred"
          className="social-icon github"
        >
        <VscGithub />        
        </a>
      </li>
    </ul>

    <p>
      &copy; <span id="date">{new Date().getFullYear()}</span> Ozan Muldur. all rights reserved.
    </p>
    <p style={{ display: "flex", alignItems: "center" }}>
      Powered by{" "}
      <a href="https://www.gatsbyjs.com/" target="_blank">
        <img
          className="gatsbyicon"
          style={{ maxHeight: "30px", marginLeft: "0.5em" }}
          src={gatsby}
        ></img>
      </a>
    </p>
  </footer>
)

export default Footer
