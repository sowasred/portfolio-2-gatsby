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
import gatsby from "../images/gatsby.png";


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
          // resume.classList.remove("resume")
        }
      } else {
        navbar.classList.remove("navbar-fixed")
        // resume.classList.add("resume")
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
            <img style={{
            height:"35px",
            margin:"10px"
            }} 
            src={Hamburger} 
            className="fas fa-bars logo"></img>
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
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              Contact
            </AnchorLink>
          </motion.li>

          {/* <motion.li variants={item}>
            <AnchorLink
              to="/blogposts"
              duration={500}
              style={{
                textDecoration: `none`,
              }}
            >
              Blog
            </AnchorLink>
          </motion.li> */}
          <motion.li variants={item}>
            <Link
              to="/about"
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
              {/* <li onClick={toggleChecked}>
                <AnchorLink
                  to="/blogposts"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Blog
                </AnchorLink>
              </li> */}
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
            </ul>
            <div className="navfooter">
              <p>
                &copy; <span id="date">{new Date().getFullYear()}</span> Ozan Muldur. all rights reserved.
              </p>
              <p style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                Powered by{" "}
                <a href="https://www.gatsbyjs.com/" target="_blank">
                  <img
                    className="gatsbyicon"
                    style={{ maxHeight: "30px", marginLeft: "0.5em" }}
                    src={gatsby}
                  ></img>
                </a>
              </p>
            </div>

          </div>
        </aside>
      ) : null}
    </nav>
  )
}

export default Navigation
