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
          <button onClick={toggleChecked} className="nav-btn" id="nav-btn">
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
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={item}>
            {" "}
            <Link
              to="/about"
              style={{
                textDecoration: `none`,
              }}
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={item}>
            {" "}
            <Link
              to="/projectspage"
              style={{
                textDecoration: `none`,
              }}
            >
              Projects
            </Link>
          </motion.li>{" "}
          <motion.li variants={item}>
            {" "}
            <a href="mailto:ozanmuldur@outlook.com">Contact</a>
          </motion.li>{" "}
        </motion.ul>
      </div>
      {showNav ? <MobileNavigation showNav={showNav} /> : null}
    </nav>
  )
}

export default Navigation
