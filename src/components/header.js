import { Link } from "gatsby"
import React from "react"
import Fb from "../images/fb.svg"
import Tw from "../images/tw.svg"
import Li from "../images/li.svg"
import Gh from "../images/gh.svg"
import Pp from "../images/pp.jpg"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

const Header = () => {
  const controls = useAnimation()
  const x = useMotionValue(0)
  controls.start({
    y: "10px",
    transition: { duration: 1 },
  })

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <motion.div animate={controls}>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x }}
              className="underline"
              whileTap={{ scale: 3 }}
            ></motion.div>
            <motion.h1
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x }}
              whileTap={{ scale: 1.2 }}
            >
              I'm Ozan{" "}
            </motion.h1>
            <motion.h4
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x }}
              whileTap={{ scale: 1.2 }}
            >
              Freelancer, Web & Mobile Application Developer
            </motion.h4>
          </motion.div>
          <motion.div animate={controls}>
            <a href="mailto:ozanmuldur@outlook.com" className="btn hero-btn">
              Hire Me
            </a>
          </motion.div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
            className="social-icons hero-icons"
          >
            {" "}
            <motion.li variants={item}>
              <a target="_blank" href="https://www.facebook.com/muldurozan/">
                <img className="social-icon" src={Fb} />
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a target="_blank" href="https://www.linkedin.com/in/ozanm/">
                <img className="social-icon" src={Li} />
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a
                target="_blank"
                href="https://twitter.com/ozanmuldur1"
                className="social-icon"
              >
                <img className="social-icon" src={Tw} />
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a
                target="_blank"
                href="https://github.com/sowasred"
                className="social-icon"
              >
                <img className="social-icon" src={Gh} />
              </a>
            </motion.li>
          </motion.ul>
        </article>
        <motion.article
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hero-img"
        >
          <img src={Pp} className="hero-photo" alt="Ozan Muldur" />
        </motion.article>
      </div>
    </header>
  )
}

export default Header
