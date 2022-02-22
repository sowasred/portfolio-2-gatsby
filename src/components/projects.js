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
  const [activeProjects, setActiveProjects] = useState([])
  const [selectedProjects, setSelectedProjects] = useState([])

  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const [numberProjects, setNumberProjects] = useState(1)

  const chevronWidth = 100

  let technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Gatsby.JS",
    "CMS",
    "AWS",
  ]
  const selectTech = e => {
    let name = e.target.innerText
    let include = selectedProjects.includes(name)
    if (!include) {
      setSelectedProjects([...selectedProjects, name])
    } else {
      let arr = selectedProjects.filter(b => b !== e.target.innerText)
      setSelectedProjects(arr)
    }
  }

  useEffect(() => {
    if (selectedProjects.length == 0) {
      setActiveProjects(projectsdata)
    } else if (selectedProjects.length > 0) {
      console.log(selectedProjects)
      let filteredProjects = projectsdata.filter(project => {
        let exist = project.techImages.some(el => {
          return selectedProjects.includes(el.alt)
        })
        return exist
      })
      setActiveProjects(filteredProjects)
    }

    if (window != undefined) {
      let windowsize = window.innerWidth
      if (windowsize < 768) {
        setNumberProjects(1)
      } else if (windowsize <= 1800) {
        setNumberProjects(2)
      } else {
        setNumberProjects(2)
      }
    }
  }, [selectedProjects])

  return (
    <React.Fragment>
      <section id="projects" className="section projects">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Checkout the project that I've been part of.
          </p>
          <p className="projects-text">
            You can also filter the projects according to used technologies.
            {activeProjects.length === projectsdata.length
              ? ` There are total  ${activeProjects.length} projects exists.`
              : ` Total ${activeProjects.length} projects found from ${projectsdata.length} projects.`}
          </p>
          <div className="techwrapper">
            {technologies.map((item, i) => (
              <span
                className={
                  selectedProjects.includes(item)
                    ? `techit selected`
                    : `techit unselected`
                }
                onClick={e => selectTech(e)}
                value={item}
                key={i}
              >
                {item}
              </span>
            ))}
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
        <ItemsCarousel
          style={{ position: "relative" }}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={numberProjects}
          gutter={60}
          chevronWidth={chevronWidth}
          outsideChevron
          leftChevron={
            <FaArrowAltCircleLeft
              style={{ marginLeft: "20px" }}
              className="arrowCarousel"
            />
          }
          rightChevron={
            <FaArrowAltCircleRight
              style={{ marginRight: "20px" }}
              className="arrowCarousel"
            />
          }
        >
          {activeProjects.map((item, i) => (
            <ProjectComponent key={i} item={item} />
          ))}
        </ItemsCarousel>
      </div>
    </React.Fragment>
  )
}

export default Projects
