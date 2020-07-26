import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Pr1 from "../images/balodana.jpg"
import Pr2 from "../images/avettipic.jpg"
import Pr3 from "../images/dkmob.jpg"
import Pr4 from "../images/temarrr.jpg"
import Pr5 from "../images/derry2.jpg"
import react from "../images/react.png"
import pp from "../images/pp.png"
import aws from "../images/aws.png"
import git from "../images/git.png"
import redux from "../images/redux.png"
import javascript from "../images/javascript.png"
import npm from "../images/npm.png"
import webpack from "../images/webpack.png"
import undercons from "../images/under.png"
import sass from "../images/sass.png"

import gatsbyimg from "../images/gatsby.png"
import nodejs from "../images/nodejs.png"
import figma from "../images/figma.png"
import strapi from "../images/strapi.png"
import material from "../images/material.png"

import graphqlimg from "../images/graphql.png"
import mongodb from "../images/mongodb.png"

import Pr6 from "../images/project-4.jpg"
import { useInView } from "react-intersection-observer"

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

const Projects = () => {
  const controls = useAnimation()

  return (
    <section id="projects" className="section projects">
      <div className="section-title">
        <h2>Latest Works</h2>
        <div className="underline"></div>
        <p className="projects-text">Check the projects I've been part of.</p>
      </div>
      <div className="section-center projects-center">
        <article className="project project-1">
          <img src={Pr1} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>balodana</h4>
            <span className="project-type">Collabrative Work</span>
            <div className="project-info-item">
              <h5>Abstract</h5>
              <p>
                Balodana is a company that tailors clothes for women, all made
                to measure and manufactured from all around the world.
              </p>
            </div>
            <div className="project-info-item">
              <h5>Technologies</h5>
              <div className="project-techs">
                <img
                  src={javascript}
                  data-tip="JavaScript"
                  alt="JavaScript"
                  className="tech-item"
                />
                <img data-tip="npm" alt="npm" src={npm} className="tech-item" />
                <img
                  data-tip="React"
                  alt="React"
                  src={react}
                  className="tech-item"
                />
                <img
                  data-tip="Redux"
                  alt="Redux"
                  src={redux}
                  className="tech-item"
                />
                <img
                  data-tip="Amazon Web Services"
                  alt="Amazon Web Services"
                  src={aws}
                  className="tech-item"
                />
                <img
                  data-tip="Git Version Control"
                  alt="Git Version Control"
                  src={git}
                  className="tech-item"
                />
                <img
                  data-tip="Photoshop CC"
                  alt="Photoshop CC"
                  src={pp}
                  className="tech-item"
                />
              </div>
            </div>
            <div className="project-info-item extra-info">
              <h5>Completed Tasks </h5>
              <div className="project-task">
                <span>Site Search Functionality &#10003;</span>
                <span>Shopping Cart &#10003;</span>
                <span>Social Media Share &#10003;</span>
                <span>Single Sign-on &#10003;</span>
              </div>
            </div>
          </div>
          <a href="https://www.balodana.com/" className="view-site">
            View Site
          </a>
        </article>

        <article className="project">
          <img src={Pr2} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>Avetti Demo Marketplace</h4>
            <span className="project-type">Collabrative Work</span>
            <div className="project-info-item">
              <h5>Abstract</h5>
              <p>
                This marketplace has gathered various e-commerce
                functionalities. Thanks to its latest technology stack, it
                offers secure and fast e-shopping.
              </p>
            </div>
            <div className="project-info-item">
              <h5>Technologies</h5>
              <div className="project-techs">
                <img
                  src={javascript}
                  data-tip="JavaScript"
                  alt="JavaScript"
                  className="tech-item"
                />
                <img data-tip="npm" alt="npm" src={npm} className="tech-item" />
                <img
                  data-tip="React"
                  alt="React"
                  src={react}
                  className="tech-item"
                />
                <img
                  data-tip="Redux"
                  alt="Redux"
                  src={redux}
                  className="tech-item"
                />
                <img
                  data-tip="Webpack"
                  alt="Webpack"
                  src={webpack}
                  className="tech-item"
                />
                <img
                  data-tip="Git Version Control"
                  alt="Git Version Control"
                  src={git}
                  className="tech-item"
                />
              </div>
            </div>
            <div className="project-info-item extra-info">
              <h5>Completed Tasks </h5>
              <div className="project-task">
                <span>Reusable React Components &#10003;</span>
                <span>Product Compare Feature &#10003;</span>
              </div>
            </div>
          </div>
          <a href="https://demob2b3shop.avetti.io/" className="view-site">
            View Site
          </a>
        </article>

        <article className="project">
          <img
            src={Pr5}
            alt="single project"
            id="avett-com"
            className="project-img"
          />
          <div className="project-info">
            <h4>Derry</h4>
            <span className="project-type">Individual Work</span>
            <img src={undercons} className="project-cons"></img>

            <div className="project-info-item">
              <h5>Abstract</h5>
              <p>
                Derry is a Leather Jacket Store for leather fashion chasers all
                around world. Thanks to its modern web stack, it allows users to
                shop in pretty fast and secure environment.
              </p>
            </div>
            <div className="project-info-item">
              <h5>Technologies</h5>
              <div className="project-techs">
                <img
                  style={{ maxHeight: "30px" }}
                  src={gatsbyimg}
                  data-tip="Gatsby"
                  alt="Gatsby"
                  className="tech-item"
                />
                <img
                  src={nodejs}
                  data-tip="Node.js"
                  alt="Node.js"
                  className="tech-item"
                />
                <img
                  data-tip="Redux"
                  alt="Redux"
                  src={redux}
                  className="tech-item"
                />
                <img
                  data-tip="Graphql"
                  alt="Graphql"
                  src={graphqlimg}
                  className="tech-item"
                />
                <img
                  data-tip="MongoDB"
                  alt="MongoDB"
                  src={mongodb}
                  className="tech-item"
                />
                <img
                  style={{ maxHeight: "30px" }}
                  data-tip="Strapi"
                  alt="Strapi"
                  src={strapi}
                  className="tech-item"
                />
                <img
                  style={{ maxHeight: "35px" }}
                  data-tip="Amazon Web Services"
                  alt="Amazon Web Services"
                  src={aws}
                  className="tech-item"
                />
              </div>
            </div>
            <div className="project-info-item extra-info">
              <h5>Completed Tasks </h5>
              <div className="project-task">
                <span>Gatsby Store &#10003;</span>
                <span>Headless CMS Strapi Integration &#10003;</span>
                <span>Deploy On AWS &#10003;</span>
              </div>
            </div>
          </div>
          <a href="https://jacketstore.netlify.app/" className="view-site">
            View Site
          </a>
        </article>
        <article className="project">
          <img src={Pr4} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>teamAR</h4>
            <span className="project-type">Individual Work</span>
            <div className="project-info-item">
              <h5>Abstract</h5>
              <p>
                teamAR is an Augmented Reality startup from Vancouver. They
                needed slick and simple design for their future customers and I
                provided what they're looking.
              </p>
            </div>
            <div className="project-info-item">
              <h5>Technologies</h5>
              <div className="project-techs">
                <img
                  style={{ maxHeight: "30px" }}
                  src={gatsbyimg}
                  data-tip="Gatsby"
                  alt="Gatsby"
                  className="tech-item"
                />
                <img
                  data-tip="Sass"
                  alt="Sass"
                  src={sass}
                  className="tech-item"
                />
                <img
                  data-tip="Figma"
                  alt="Figma"
                  src={figma}
                  className="tech-item"
                />
                <img
                  data-tip="Photoshop CC"
                  alt="Photoshop CC"
                  src={pp}
                  className="tech-item"
                />
              </div>
            </div>
            <div className="project-info-item extra-info">
              <h5>Completed Tasks </h5>
              <div className="project-task">
                <span>Gatsby PWA &#10003;</span>
                <span>Design Implementation &#10003;</span>
              </div>
            </div>
          </div>
          <a href="https://teamar.netlify.app/" className="view-site">
            View Site
          </a>
        </article>
        <article className="project">
          <img src={Pr3} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>THE DIAMOND STORE</h4>
            <span className="project-type">Collabrative Work</span>
            <div className="project-info-item">
              <h5>Abstract</h5>
              <p>
                Jewellery Manufacturer from India converted their ftont-end
                technology from Java-Spring to React for sake of speed and
                reliability.
              </p>
            </div>
            <div className="project-info-item">
              <h5>Technologies</h5>
              <div className="project-techs">
                <img
                  src={sass}
                  data-tip="Sass"
                  alt="Sass"
                  className="tech-item"
                />
                <img
                  data-tip="React"
                  alt="React"
                  src={react}
                  className="tech-item"
                />

                <img
                  style={{ width: "30px" }}
                  data-tip="material ui"
                  alt="material ui"
                  src={material}
                  className="tech-item"
                />
                <img
                  data-tip="Figma"
                  alt="Figma"
                  src={figma}
                  className="tech-item"
                />
              </div>
            </div>
            <div className="project-info-item extra-info">
              <h5>Completed Tasks </h5>
              <div className="project-task">
                <span>Design Implementations &#10003;</span>
              </div>
            </div>
          </div>
          <a href="https://www.thediamondkart.com/" className="view-site">
            View Site
          </a>
        </article>
      </div>
    </section>
  )
}

export default Projects
