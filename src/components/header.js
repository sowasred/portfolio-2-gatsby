import { Link } from "gatsby"
import React from "react"
import Fb from "../images/fb.svg"
import Tw from "../images/tw.svg"
import Li from "../images/li.svg"
import Gh from "../images/gh.svg"
import Pp from "../images/pp.jpg"

const Header = () => (
  <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div className="underline"></div>
        <h1>I'm Ozan</h1>
        <h4>Freelancer, Web & Mobile Application Developer</h4>
        <a href="mailto:ozanmuldur@outlook.com" className="btn hero-btn">
          Hire Me
        </a>
        <ul className="social-icons hero-icons">
          <li>
            <a target="_blank" href="https://www.facebook.com/muldurozan/">
              <img className="social-icon" src={Fb} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/ozanm/">
              <img className="social-icon" src={Li} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/ozanmuldur1"
              className="social-icon"
            >
              <img className="social-icon" src={Tw} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/sowasred"
              className="social-icon"
            >
              <img className="social-icon" src={Gh} />
            </a>
          </li>
        </ul>
      </article>
      <article className="hero-img">
        <img src={Pp} className="hero-photo" alt="Ozan Muldur" />
      </article>
    </div>
  </header>
)

export default Header
