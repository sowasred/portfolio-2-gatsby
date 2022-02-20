import React from "react"


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
            videos on YouTube and even started to code along with some of them.<br></br>
            After a week I was hooked on being able to create whatever I want in
            terms of coding and this made me dig into deep more and more...
          </p>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>Georgian College</h4>
          <h4 className="timeline-title">Computer Programmer | 2017 – 2019</h4>
          <p className="item-text">
            Those desires have led me to study abroad in Canada. It was a great
            challenge but I've tackled it well and finished the program on time.
          </p>
          <span className="number">3</span>
        </article>

        <article className="timeline-item">
          <h4>Avetti Commerce</h4>
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
          <h4>ResortSuite</h4>
          <h4 className="timeline-title">Full Stack Developer | 2021 - Current</h4>
          <p className="item-text">
            In my current position I'm working on company's various hospitality managements 
            softwares as a full-stack dev. Dealing with multiple projects based on different 
            technology stacks has made me more versatile since I've started. I'm also grateful 
            for being part of such a great team and culture in ResortSuite. 
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
