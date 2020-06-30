import { Link } from "gatsby"
import React from "react"
import Blogpost1Pic from "../images/jam.png"
import Blogpost1Pic1 from "../images/hero-img-small.jpg"

const AboutContent = () => (
  <section className="section single-page">
    <div className="section-title">
      <h1>About Me</h1>
      <div className="underline"></div>
    </div>
    <div className="section-center page-info">
      <div className="section-center timeline-center">
        <article className="timeline-item">
          <h4>Istanbul Technical University | 2010 - 2015</h4>
          <h4 className="timeline-title">Ocean Engineering</h4>
          <p className="item-text">
            I found my passion later in life but that is okay. In nearly the end
            of my high school years, I was thinking about designing huge ships
            would be a really cool job to do. Seeing them being constructed each
            day to the real dimensions and being able to walk on it would give
            me joy and motivation for life.
          </p>
          <span className="number">1</span>
        </article>
        <article className="timeline-item">
          <h4>Gozuyilmaz Eng. Ltd. | 2015 – 2017</h4>
          <h4 className="timeline-title">Design Engineer</h4>
          <p className="item-text">
            When I started working in the field, I quickly figured out that it
            is fun and all, but it is not the sole job that I want to do for the
            rest of my life. In the meantime, I was coming across programming
            videos on YouTube and even started to code along with some of them.
            After a week I was hooked to being able to create whatever I want in
            terms of coding and this makes me dig into deep more and more..
          </p>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>Georgian College | 2018 – 2020</h4>
          <h4 className="timeline-title">Computer Programmer</h4>
          <p className="item-text">
            Those desires have led me to study abroad in Canada. It was a great
            challenge but I've tackled well and finished my program and my co-op
            work terms on time.
          </p>
          <span className="number">3</span>
        </article>

        <article className="timeline-item">
          <h4>Avetti Commerce | 2019 – 2020</h4>
          <h4 className="timeline-title">Front-end Developer(Co-op)</h4>
          <p className="item-text">
            After being familiar with the different fields in IT, I've started
            in Avetti Commerce as a front-end developer co-op. In Avetti
            Commerce working internationally with cross-functional teams has
            contributed significantly to my coding and organizational skills.
          </p>
          <span className="number">4</span>
        </article>

        <article className="timeline-item">
          <h4>Freelancer | 2020 - Present</h4>
          <h4 className="timeline-title">Web & Mobile Application Developer</h4>
          <p className="item-text">
            After all stuggles and hardwork I'm ready and excited for valuable
            roles in the IT industry. I'm currently working independently as a
            freelancer.
          </p>
          <a href="mailto:ozanmuldur@outlook.com" className="btn hero-btn">
            hire me
          </a>

          <span className="number">5</span>
        </article>
      </div>
    </div>
  </section>
)

export default AboutContent
