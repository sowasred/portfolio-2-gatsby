import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

import projectsdata from "../constants/projectsdata"

import ProjectComponent from "../components/projectcomponent"

import { useInView } from "react-intersection-observer"
import ItemsCarousel from "react-items-carousel"

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"

const Projects = () => {
  return (
    <React.Fragment>
      <section id="projects" className="section projects">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Check out the projects that I've been part of.
          </p>
          <div className="techwrapper">
          </div>
        </div>
        <span
          id="projectcount"
          style={{
            position: "absolute",
            textAlign: "center",
            left: "44%",
            fontWeight: 700,
          }}
        ></span>
      </section>
      <div
        className="carouselWrapper"
        style={{ padding: "0 60px", maxWidth: 1200, margin: "0 auto" }}
      >
          {projectsdata.map((item, i) => (
            <ProjectComponent key={i} item={item} />
          ))}
          
      </div>
    </React.Fragment>
  )
}

export default Projects
