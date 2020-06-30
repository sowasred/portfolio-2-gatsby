import { Link } from "gatsby"
import React from "react"

import Fb from "../images/fb.svg"
import Tw from "../images/tw.svg"
import Li from "../images/li.svg"
import Gh from "../images/gh.svg"
import Pp from "../images/pp.jpg"

const Footer = () => (
  <footer class="footer">
    <ul className="social-icons">
      <li>
        <a
          target="_blank"
          href="https://www.facebook.com/muldurozan/"
          className="social-icon"
        >
          <img src={Fb} className="fab fa-facebook"></img>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ozanm/"
          className="social-icon"
        >
          <img src={Li} className="fab fa-facebook"></img>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/ozanmuldur1"
          className="social-icon"
        >
          <img src={Tw} className="fab fa-facebook"></img>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/sowasred"
          className="social-icon"
        >
          <img src={Gh} className="fab fa-facebook"></img>
        </a>
      </li>
    </ul>

    <p>
      &copy; <span id="date"></span> Ozan Muldur. all rights reserved
    </p>
  </footer>
)

export default Footer
