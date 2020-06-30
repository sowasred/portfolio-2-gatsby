/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Fb from "../images/fb.svg"
import Tw from "../images/tw.svg"
import Li from "../images/li.svg"
import Gh from "../images/gh.svg"
import Pp from "../images/pp.jpg"

const MobileNavigation = ({ showNav }) => {
  return (
    <aside
      className={showNav ? "sidebar show-sidebar" : "sidebar"}
      id="sidebar"
    >
      <div>
        <ul className="sidebar-links">
          <li>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: `none`,
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projectspage"
              style={{
                textDecoration: `none`,
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <a href="mailto:ozanmuldur@outlook.com">Contact</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Zb0z3PmsCGUloL_3In4sI1IFtDJip8Lw/view?usp=sharing"
            >
              Resume
            </a>
          </li>
        </ul>
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
      </div>
    </aside>
  )
}

export default MobileNavigation
