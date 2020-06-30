/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "./image"
import Img from "gatsby-image"

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
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <ul className="nav-links">
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
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
