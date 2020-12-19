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
          <h4>Istanbul Technical University </h4>
          <h4 className="timeline-title">Ocean Engineering | 2010 - 2015</h4>
          <p className="item-text">
            I found my passion later in life but that is okay. At the end of my
            high school years, I was thinking about designing huge ships would
            be a cool job to do. Seeing them being constructed each day to the
            real dimensions and being able to walk on it would give me joy and
            motivation for life.
          </p>
          <span className="number">1</span>
        </article>
        <article className="timeline-item">
          <h4>Gozuyilmaz Eng. Ltd. </h4>
          <h4 className="timeline-title">Design Engineer | 2015 – 2017</h4>
          <p className="item-text">
            When I started working in the field, I quickly figured out that it
            is fun and all, but it is not the sole job that I want to do for the
            rest of my life. In the meantime, I was coming across programming
            videos on YouTube and even started to code along with some of them.
            After a week I was hooked on being able to create whatever I want in
            terms of coding and this makes me dig into deep more and more...
          </p>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>Georgian College</h4>
          <h4 className="timeline-title">Computer Programmer | 2017 – 2019</h4>
          <p className="item-text">
            Those desires have led me to study abroad in Canada. It was a great
            challenge but I've tackled it well and finished my program and my
            co-op work terms on time.
          </p>
          <span className="number">3</span>
        </article>

        <article className="timeline-item">
          <h4>GTA - Handyman </h4>
          <h4 className="timeline-title">
            Full Stack Developer(Co-op) | 2018 – 2019
          </h4>
          <p className="item-text">
            After being familiar with the different fields in IT, I've started
            in GTA - Handyman as a full stack developer co-op. It was an
            excellent experience to work in this company as a co-op student.
            I've tasted from coding to SEO, and I was even responsible for some
            marketing tasks that allow me to see the bigger picture in a small
            company environment.
          </p>
          <span className="number">4</span>
        </article>

        <article className="timeline-item">
          <h4>Avetti Commerce</h4>
          <h4 className="timeline-title">Front-end Developer | 2019 – 2020</h4>
          <p className="item-text">
            Thanks to my React knowledge in web application development helped
            me to get into Avetti Commerce as a front-end developer. Working
            internationally with cross-functional teams has contributed
            significantly to my coding and organizational skills. It was a great
            experience in terms of being part of multiple projects that I'm
            proud of most.
          </p>
          <span className="number">5</span>
        </article>

        <article className="timeline-item">
          <h4>Freelancer</h4>
          <h4 className="timeline-title">
            Web & Mobile Application Developer | 2020 - Present
          </h4>
          <p className="item-text">
            After all struggles and hard work, I'm ready and excited for
            valuable roles in the IT industry. I'm currently working
            independently as a freelancer.
          </p>
          <a href="mailto:ozanmuldur@outlook.com" className="btn hero-btn">
            hire me
          </a>

          <span className="number">6</span>
        </article>
      </div>
    </div>
  </section>
)

export default AboutContent
