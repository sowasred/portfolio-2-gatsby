import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { SiFacebook, SiLinkedin } from "react-icons/si"
import { VscTwitter, VscGithub } from "react-icons/vsc"
import { xHandleFromProfile } from "../utils/x"

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
  const xHandle = xHandleFromProfile(xProfile)

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
          aria-label={`Ozan Muldur on X (${xHandle})`}
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
