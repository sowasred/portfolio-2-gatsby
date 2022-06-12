import React from "react"
import internImage from "../images/ozan-muldur-istanbul-technical-university-internship.jpeg"
import aboutPageImages from "../constants/aboutPageImages"

import engineerImage from "../images/engineer-ozan-muldur.jpeg"
import engineerImage2 from "../images/engineer-ozan-muldur-ship.jpeg"

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
            I found my passion later in life but that is okay. At the end of my
            high school years, I was thinking about designing huge ships would
            be a cool job to do. Seeing them being constructed each day to the
            real dimensions and being able to walk on it would give me joy and
            motivation for life.
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
            When I started working in the field, I quickly figured out that it
            is fun and all, but it is not the sole job that I want to do for the
            rest of my life. In the meantime, I was coming across programming
            videos on YouTube and even started to code along with some of them.
            <br></br>
            After a week I was hooked on being able to create whatever I want in
            terms of coding and this made me dig into deep more and more...
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
            Those desires have led me to study abroad in Canada. It was a great
            challenge but I've tackled it well and finished the program on time.
          </p>
          <span className="number">3</span>
        </article>
        <article className="timeline-item">
          <h4>
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://www.avetticommerce.com/"
            >
              Avetti Commerce
            </a>
          </h4>
          <h4 className="timeline-title">Front-end Developer | 2019 – 2021</h4>
          <p className="item-text">
            Thanks to my React knowledge in web application development helped
            me to get into Avetti Commerce as a front-end developer. Working
            internationally with cross-functional teams has contributed
            significantly to my coding and organizational skills. It was a great
            experience in terms of being part of multiple projects that I'm
            proud of most.
          </p>
          <span className="number">4</span>
        </article>
        <article className="timeline-item">
          <h4>
            <a
              className="aboutPageLink"
              target="_blank"
              href="https://www.resortsuite.com/"
            >
              ResortSuite
            </a>
          </h4>
          <h4 className="timeline-title">
            Full Stack Developer | 2021 - Current
          </h4>
          <p className="item-text">
            In my current position I'm working on company's various hospitality
            managements softwares as a full-stack dev. Dealing with multiple
            projects based on different technology stacks has made me more
            versatile since I've started. I'm also grateful for being part of
            such a great team and culture in ResortSuite.
          </p>
          <a href="mailto:ozanmuldur@outlook.com" className="btn hero-btn">
            Contact Me
          </a>
          <span className="number">5</span>
        </article>
      </div>
    </div>
  </section>
)

export default AboutContent
