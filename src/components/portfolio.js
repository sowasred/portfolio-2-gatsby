import React from 'react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"
import projectsdata from "../constants/projectsdata"
import ItemsCarousel from "react-items-carousel"

import {
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
  } from "framer-motion"
  

function portfolio(props) {
  return (
    <div>      {/* <img
        src={item.item.background}
        alt="single project"
        className="project-img"
      /> */}
      {/* <a
        className="project-titlelink view-site"
        target="_blank"
        href={item.item.link}
      >
        {item.item.name}
      </a> */}
      <div className="project-info">
        {/* <span className="project-type">{item.item.collabtype}</span> */}
        {/* <div className="project-info-item"> */}
        {/* <h5>Abstract</h5> */}
        {/* <p>{item.item.description}</p> */}
        {/* </div> */}
        <div className="project-info-item">
          <h5>Technologies</h5>
          <div className="project-techs">
            {/* {item.item.techImages.map(techimg => (
              <img
                src={techimg.img}
                data-tip={techimg.alt}
                alt={techimg.alt}
                className="tech-item"
              />
            ))} */}
          </div>
        </div>
        {/* <div className="project-info-item extra-info">
          <h5>Completed Tasks </h5>
          <div className="project-task">
            {item.item.tasks.map(txt => (
              <span>{txt} &#10003;</span>
            ))}
          </div>
        </div> */}
      </div></div>
  )
}

portfolio.propTypes = {}

export default portfolio
