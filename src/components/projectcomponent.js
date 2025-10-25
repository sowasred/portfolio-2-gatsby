import React, { useEffect, useState } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

const ProjectComponent = ({ item }) => {
  const backgrounds = Array.isArray(item.background)
    ? item.background.filter(Boolean)
    : [item.background].filter(Boolean)
  const primaryBackground = backgrounds[0] || ""
  const [imageSrc, setImageSrc] = useState(primaryBackground)

  useEffect(() => {
    setImageSrc(primaryBackground)
  }, [primaryBackground])

  return (
    <div className="project">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageSrc}
          alt="single project"
          className="project-img"
          onMouseEnter={() =>
            backgrounds[1] ? setImageSrc(backgrounds[1]) : undefined
          }
          onMouseLeave={() => setImageSrc(primaryBackground)}
        />
        <h4 className="projectTitle">{item.name}</h4>
        <div className="texhnologiesWrapper">
          <p>{item.description}</p>
          <h5>Technologies</h5>
          <div className="techBadges">
            {item.techImages.map((techimg, i) => (
              <img
                key={i}
                src={techimg.img}
                data-tip={techimg.alt}
                title={techimg.alt}
                alt={techimg.alt}
                className="tech-item"
              />
            ))}
          </div>
          <span className="checkLive">
            Check the project <FaLongArrowAltRight className="arrowCheck" />
          </span>
        </div>
      </a>
    </div>
  )
}

export default ProjectComponent
