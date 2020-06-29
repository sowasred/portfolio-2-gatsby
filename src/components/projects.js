import { Link } from "gatsby"
import React from "react"
import Pr1 from "../images/project-1.jpg"
import Pr2 from "../images/project-2.jpg"
import Pr3 from "../images/project-3.jpg"
import Pr4 from "../images/project-4.jpg"

const Projects = () => (
  <section className="section projects">
    <div className="section-title">
      <h2>Latest Works</h2>
      <div className="underline"></div>
      <p className="projects-text">Check the project I've been part of.</p>
    </div>
    <div className="section-center projects-center">
      <a
        href="https://demob2b2cpreview.avetti.io/"
        target="_blank"
        className="project-1"
      >
        <article className="project">
          <img src={Pr1} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>Avetti Demo Marketplace</h4>
            <p>
              This marketplace has gathered various e-commerce functionalities.
              Thanks to its latest technology stack, it offers secure and fast
              e-shopping.
            </p>
          </div>
        </article>
      </a>
      <a href="https://www.balodana.com/" target="_blank" className="project-2">
        <article className="project">
          <img src={Pr2} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>balodana</h4>
            <p>
              Balodana is a company that tailors clothes for women, all made to
              measure and manufactured from all around the world.
            </p>
          </div>
        </article>
      </a>
      <a
        href="https://www.thediamondkart.com/"
        target="_blank"
        className="project-3"
      >
        <article className="project">
          <img src={Pr3} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>THE DIAMONDKART</h4>
            <p>Jewellery Manufacturer from India.</p>
          </div>
        </article>
      </a>
      <a
        href="https://sowasred.github.io/furnituretest/"
        target="_blank"
        className="project-4"
      >
        <article className="project">
          <img src={Pr4} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>Furniture Store Design</h4>
            <p>Design Project</p>
          </div>
        </article>
      </a>
    </div>
  </section>
)

export default Projects
