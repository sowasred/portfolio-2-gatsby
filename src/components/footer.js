import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { SiFacebook, SiLinkedin } from "react-icons/si"
import { VscGithub } from "react-icons/vsc"

import gatsby from "../images/gatsby.png"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query FooterXProfile {
      site {
        siteMetadata {
          xProfile
        }
      }
    }
  `)
  const xProfile = site.siteMetadata.xProfile

  return (
  <footer className="footer">
    <ul className="social-icons">
      {/* <li>
        <a
          target="_blank"
          href="https://www.facebook.com/muldurozan/"
          className="social-icon fb"
        >
          <SiFacebook />
        </a>
      </li> */}
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
          rel="noopener noreferrer"
          href={xProfile}
          className="social-icon twitter"
          aria-label="X"
          title="X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
          </svg>
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
      &copy; <span id="date">{new Date().getFullYear()}</span> Ozan Muldur all
      rights reserved.
    </p>
    <p style={{ display: "flex", alignItems: "center" }}>
      Powered by{" "}
      <a href="https://www.gatsbyjs.com/" target="_blank">
        <img
          className="gatsbyicon"
          style={{ maxHeight: "30px", marginLeft: "0.5em" }}
          src={gatsby}
          alt="Gatsby Official Site"
        ></img>
      </a>
    </p>
  </footer>
  )
}

export default Footer
