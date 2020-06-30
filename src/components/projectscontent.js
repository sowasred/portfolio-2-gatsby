import { Link } from "gatsby"
import React from "react"
import Project1Pic from "../images/project-1b.jpg"
import Project2Pic from "../images/project-2b.jpg"
import Project3Pic from "../images/project-3b.jpg"
import Project4Pic from "../images/project-4b.jpg"
import HomeIcon from "../images/home.svg"

const ProjectsContent = () => (
  <section className="section">
    <div className="section-center projects-page-center">
      <article className="single-project">
        <div className="project-container">
          <img src={Project1Pic} alt="single project" />
          <a
            target="_blank"
            href="https://demob2b2cpreview.avetti.io/"
            className="project-icon"
          >
            <img src={HomeIcon} className="fas fa-home"></img>
          </a>
        </div>
        <div className="project-details">
          <h4>Avetti Demo Marketplace</h4>
          <p>
            In this project, I was a part of the team which created a blueprint
            of high-end e-commerce stores. This website is fully functional and
            ready for any business that desires to have a fast, elegant and
            secure marketplace.
          </p>
        </div>
      </article>

      <article className="single-project">
        <div className="project-container">
          <img src={Project2Pic} alt="single project" />
          <a
            target="_blank"
            href="https://www.balodana.com/"
            className="project-icon"
          >
            <img src={HomeIcon} className="fas fa-home"></img>
          </a>
        </div>
        <div className="project-details">
          <h4>balodana</h4>
          <p>
            Balodana is a company that tailors clothes for women, all made to
            measure and manufactured from all around the world.
          </p>
        </div>
      </article>

      <article className="single-project">
        <div className="project-container">
          <img src={Project3Pic} alt="single project" />
          <a
            target="_blank"
            href="https://www.thediamondkart.com/"
            className="project-icon"
          >
            <img src={HomeIcon} className="fas fa-home"></img>
          </a>
        </div>
        <div className="project-details">
          <h4>THE DIAMONDKART</h4>
          <p>
            DiamondKart is a Jewellery Manufacturer which I have worked in a
            team to develop the company’s website. I have created various
            components for this react based website application.
          </p>
        </div>
      </article>

      <article className="single-project">
        <div className="project-container">
          <img src={Project4Pic} alt="single project" />
          <a
            target="_blank"
            href="https://sowasred.github.io/furnituretest/"
            className="project-icon"
          >
            <img src={HomeIcon} className="fas fa-home"></img>
          </a>
        </div>
        <div className="project-details">
          <h4>Furniture Store Design</h4>
          <p>Developed modern looking furniture store design.</p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a target="_blank" href="https://github.com/sowasred/furnituretest">
              source code
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
)

export default ProjectsContent
