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
    "Sass",
    "Photoshop",
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
    let newarr = []

    if (selectedProjects.length == 0) {
      setActiveProjects(projectsdata)
    } else if (selectedProjects.length > 0) {
      projectsdata.forEach(item => {
        const found = item.techImages.some(
          r => selectedProjects.indexOf(r.alt) >= 0
        )
        if (found && selectedProjects.length == 1) {
          newarr = [...newarr, item]
          setActiveProjects(newarr)
        } else if (found && selectedProjects.length > 1) {
          newarr = [...newarr, item]
          setActiveProjects(newarr)
        }
      })
    }

    if (window != undefined) {
      let windowsize = window.innerWidth
      if (windowsize < 768) {
        setNumberProjects(1)
      } else if (windowsize <= 991) {
        setNumberProjects(2)
      } else if (windowsize <= 1440) {
        setNumberProjects(2)
      } else {
        setNumberProjects(3)
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
            Filter the projects according to technologies.
            {activeProjects.length === projectsdata.length
              ? ` Total  ${activeProjects.length} Projects Showing`
              : ` Total ${activeProjects.length} Projects Showing`}
          </p>
          <div className="techwrapper">
            {technologies.map(item => (
              <span
                className={
                  selectedProjects.includes(item)
                    ? `techit selected`
                    : `techit unselected`
                }
                onClick={e => selectTech(e)}
                value={item}
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
      <ItemsCarousel
        style={{ position: "relative" }}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberProjects}
        gutter={0}
        leftChevron={<button class="left-but">{"<"}</button>}
        rightChevron={<button class="right-but">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {activeProjects.map(item => (
          <ProjectComponent item={item} />
        ))}
      </ItemsCarousel>
    </React.Fragment>
  )
}

export default Projects
