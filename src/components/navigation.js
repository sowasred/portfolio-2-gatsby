/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Hamburger from "../images/hamburger.svg"
import Close from "../images/close.svg"
import MobileNavigation from "./mobilenavigation"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Fb from "../images/fb.svg"
import Tw from "../images/tw.svg"
import Li from "../images/li.svg"
import Gh from "../images/gh.svg"

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ozanlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const [showNav, setShowNav] = useState(false)

  const toggleChecked = () => setShowNav(value => !value)

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector("#nav")
      const resume = document.querySelector("#resume")

      if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed")
        if (window.innerWidth > 768) {
          resume.classList.remove("resume")
        }
      } else {
        navbar.classList.remove("navbar-fixed")
        resume.classList.add("resume")
      }
    })
  }

  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <button
            onClick={toggleChecked}
            className="nav-btn fixed-top"
            id="nav-btn"
          >
            <img src={Hamburger} className="fas fa-bars"></img>
          </button>
          {showNav ? (
            <button
              onClick={toggleChecked}
              id="close-btn"
              className="close-btn"
            >
              <img src={Close} className="fas fa-times"></img>
            </button>
          ) : null}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Zb0z3PmsCGUloL_3In4sI1IFtDJip8Lw/view?usp=sharing"
            id="resume"
            className="resume btn hero-btn"
          >
            Resume
          </a>
        </div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className="nav-links"
        >
          <motion.li variants={item}>
            <AnchorLink
              to="/#home"
              smooth="true"
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              Home
            </AnchorLink>
          </motion.li>
          <motion.li variants={item}>
            {" "}
            <AnchorLink
              to="/#projects"
              smooth={true}
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              Projects
            </AnchorLink>
          </motion.li>
          <motion.li variants={item}>
            <AnchorLink
              to="/#contact"
              smooth={true}
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              Contact
            </AnchorLink>
          </motion.li>

          <motion.li variants={item}>
            <AnchorLink
              to="/#blog"
              smooth={true}
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              Blog
            </AnchorLink>
          </motion.li>
          <motion.li variants={item}>
            <Link
              to="/about"
              smooth={true}
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              About
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      {showNav ? (
        <aside
          className={showNav ? "sidebar show-sidebar" : "sidebar"}
          id="sidebar"
        >
          <div>
            <ul className="sidebar-links">
              <li onClick={toggleChecked}>
                <AnchorLink
                  to="/#home"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Home
                </AnchorLink>
              </li>
              <li onClick={toggleChecked}>
                <AnchorLink
                  to="/#projects"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Projects
                </AnchorLink>
              </li>
              <li onClick={toggleChecked}>
                <AnchorLink to="/#contact">Contact</AnchorLink>
              </li>
              <li onClick={toggleChecked}>
                <AnchorLink
                  to="/#blog"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Blog
                </AnchorLink>
              </li>
              <li onClick={toggleChecked}>
                <AnchorLink
                  to="/about"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  About
                </AnchorLink>
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
      ) : null}
    </nav>
  )
}

export default Navigation
