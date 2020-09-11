import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

import projectsdata from "../constants/projectsdata"

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

  const controls = useAnimation()

  let technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Gatsby.JS",
    "CMS",
    "WordPress",
    "PHP",
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
    console.info(selectedProjects)
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
      console.info("ozan", windowsize, typeof windowsize)
      if (windowsize < 768) {
        setNumberProjects(1)
      } else if (windowsize <= 991) {
        setNumberProjects(2)
      } else if (windowsize <= 1440) {
        setNumberProjects(3)
      } else {
        setNumberProjects(4)
      }
    }
  }, [selectedProjects])

  return (
    <React.Fragment>
      <section id="projects" className="section projects">
        <div className="section-title">
          <h2>Latest Works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Filter the projects according to technologies.
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
        {/* <div className="section-center projects-center"> */}

        {/* </div> */}
        <span
          id="projectcount"
          style={{
            position: "absolute",
            textAlign: "center",
            left: "44%",
            fontWeight: 700,
          }}
        >
          {activeProjects.length === projectsdata.length
            ? `Total  ${activeProjects.length} Projects`
            : `${activeProjects.length} Projects`}
        </span>
      </section>
      <ItemsCarousel
        style={{ position: "relative" }}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberProjects}
        gutter={0}
        leftChevron={<button id="left-but">{"<"}</button>}
        rightChevron={<button id="right-but">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {activeProjects.map(item => {
          return (
            <article className="project">
              <img
                src={item.background}
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>{item.name}</h4>
                <span className="project-type">{item.collabtype}</span>
                <div className="project-info-item">
                  <h5>Abstract</h5>
                  <p>{item.description}</p>
                </div>
                <div className="project-info-item">
                  <h5>Technologies</h5>
                  <div className="project-techs">
                    {item.techImages.map(techimg => (
                      <img
                        src={techimg.img}
                        data-tip={techimg.alt}
                        alt={techimg.alt}
                        className="tech-item"
                      />
                    ))}
                  </div>
                </div>
                <div className="project-info-item extra-info">
                  <h5>Completed Tasks </h5>
                  <div className="project-task">
                    {item.tasks.map(txt => (
                      <span>{txt} &#10003;</span>
                    ))}
                  </div>
                </div>
              </div>
              <a target="_blank" href={item.link} className="view-site">
                View Site
              </a>
            </article>
          )
        })}
      </ItemsCarousel>
    </React.Fragment>
  )
}

export default Projects
