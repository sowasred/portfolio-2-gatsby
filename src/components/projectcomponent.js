import React from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

const ProjectComponent = item => {
  return (
    <div className="project">
      <a href={item.item.link} target="_blank">
        <img
          src={item.item.background}
          alt="single project"
          className="project-img"
        />
        <h4 className="projectTitle">{item.item.name}</h4>
        <div className="texhnologiesWrapper">
          <p>{item.item.description}</p>
          <h5>Technologies</h5>
          <div className="techBadges">
            {item.item.techImages.map((techimg, i) => (
              <img
                key={i}
                src={techimg.img}
                data-tip={techimg.alt}
                alt={techimg.alt}
                className="tech-item"
              />
            ))}
          </div>
          <span className="checkLive">
            Check the live site <FaLongArrowAltRight className="arrowCheck" />
          </span>
        </div>
      </a>
    </div>
  )
}

export default ProjectComponent
