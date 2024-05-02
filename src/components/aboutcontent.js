import React from "react"
import internImage from "../images/ozan-muldur-istanbul-technical-university-internship.jpeg"
import aboutPageImages from "../constants/aboutPageImages"

// import logos, and images
import itulogo from "../images/itu.svg"
import izmirshipyardlogo from "../images/izmirship.jpeg"
import georgianlogo from "../images/georgian.png"
import avettilogo from "../images/avetti.svg"
import aglogo from "../images/agilysys.png"

import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
const AutoplaySlider = withAutoplay(AwesomeSlider)



const AboutContent = () => (
  <section className="section single-page aboutPage">
    <div className="section-title">
      <h1>About Me</h1>
      <div className="underline"></div>
    </div>
    <div className="section-center page-info">
      <div className="section-center timeline-center">
        <article className="timeline-item">
          <h4>
            <img className="aboutPageLogo" alt="Istanbul Technical University" src={itulogo}></img>
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://www.itu.edu.tr/en"
            >
              Istanbul Technical University
            </a>
          </h4>
          <h4 className="timeline-title">Ocean Engineering | 2010 - 2015</h4>
          <p className="item-text">
            Discovering my passion later in life was perfectly fine with me. Toward the end of my high school years, the idea of designing massive ships captivated me. I imagined how rewarding it would be to see them take shape each day, growing to their full dimensions. The thought of walking on something that I had helped create filled me with joy and motivation for the future.
          </p>
          <img
            className="aboutPageImage"
            alt="Ozan Muldur istanbul technical university internship picture"
            src={internImage}
          ></img>
          <span className="number">1</span>
        </article>
        <article className="timeline-item">
          <h4>
            <img src={izmirshipyardlogo} alt="Izmir Shipyard Logo" className="aboutPageLogo" />
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://www.izmirshipyard.com/"
            >
              Izmir Shipyard Engineered by Gozuyilmaz
            </a>
          </h4>
          <h4 className="timeline-title">Design Engineer | 2015 – 2017</h4>
          <p className="item-text">
            Upon starting my career in the field, I quickly realized that, while enjoyable, it wasn't the sole pursuit I wanted to dedicate my life to. Around this time, I stumbled upon programming tutorials on YouTube and began coding along with them. 
            <br></br>
            Within a week, the ability to create virtually anything through code had me thoroughly captivated, leading me to delve deeper into the world of programming.
          </p>
          <AutoplaySlider
            animation="foldOutAnimation"
            cancelOnInteraction={false}
            interval={1000}
            bullets={false}
          >
            {aboutPageImages.engineer.map((image, index) => (
              <div className="slider-item" key={index}>
                <img
                  className="aboutPageImage"
                  alt="Ozan Muldur engineer picture"
                  src={image}
                ></img>
              </div>
            ))}
          </AutoplaySlider>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>
            <img src={georgianlogo} alt="Georgian College Logo" className="aboutPageLogo" />
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://www.georgiancollege.ca/"
            >
              Georgian College
            </a>
          </h4>
          <h4 className="timeline-title">Computer Programmer | 2017 – 2019</h4>
          <p className="item-text">
            This newfound interest led me to pursue studies abroad in Canada, a formidable challenge that I embraced wholeheartedly. I successfully completed the program, on time and enriched by the experience. The decision to study computer programming was a pivotal step in my journey, marking a transition from a fascination with physical engineering to the boundless possibilities of software development.
          </p>
          <span className="number">3</span>
        </article>
        <article className="timeline-item">
          <h4>
            <img src={avettilogo} alt="Avetti Commerce Logo" className="aboutPageLogo" />
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://www.avetticommerce.com/"
            >
              Avetti Commerce
            </a>
          </h4>
          <h4 className="timeline-title">Full Stack Developer | 2019 – 2021</h4>
          <p className="item-text">
            My expertise in React and web application development led to a position at Avetti Commerce, where my role evolved into full stack development. Working in an international environment with cross-functional teams, I honed not only my frontend skills but also developed a robust capability in backend technologies. This position was crucial in enhancing my overall coding skills and understanding of complete software solutions, contributing to projects that rank among my proudest achievements.
          </p>
          <span className="number">4</span>
        </article>
        <article className="timeline-item">
          <h4>
            <img src={aglogo} alt="Agilysys Logo" className="aboutPageLogo" />
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://discover.agilysys.com/"
            >
              Agilysys
            </a>
          </h4>
          <h4 className="timeline-title">
            Software Engineer | 2021 - Current
          </h4>
          <p className="item-text">
            Currently, as a software engineer at Agilysys, I am involved in developing various hospitality management software. This role allows me to engage with multiple projects across different technology stacks, further broadening my skill set and making me a more versatile developer. I am deeply grateful for the opportunity to be part of such an exceptional team and company culture at Agilysys.
          </p>
          <a href="mailto:muldurozan@gmail.com" className="btn hero-btn">
            Contact Me
          </a>
          <span className="number">5</span>
        </article>
      </div>
    </div>
  </section>
)

export default AboutContent
