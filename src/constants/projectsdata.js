import react from "../images/react.png"
import pp from "../images/pp.png"
import aws from "../images/aws.png"
import git from "../images/git.png"
import redux from "../images/redux.png"
import javascript from "../images/javascript.png"
import npm from "../images/npm.png"
import webpack from "../images/webpack.png"
import undercons from "../images/under.png"
import sass from "../images/sass.png"
import php from "../images/php.png"

import gatsbyimg from "../images/gatsby.png"
import nodejs from "../images/nodejs.png"
import figma from "../images/figma.png"
import strapi from "../images/strapi.png"
import material from "../images/material.png"

import graphqlimg from "../images/graphql.png"
import mongodb from "../images/mongodb.png"
import css from "../images/css.png"

import Pr1 from "../images/balodana12.png"
import Pr2 from "../images/avettipic12.png"
import Pr4 from "../images/teamarnew.png"
import Pr5 from "../images/dkmob12.png"


export default [
  {
    name: "balodana",
    background: Pr1,
    collabtype: "Collabrative Work",
    description:
      " Balodana is a company that tailors clothes for women, all made to measure and manufactured from all around the world.",
    techImages: [
      { img: javascript, alt: "JavaScript" },
      { img: npm, alt: "npm" },
      { img: react, alt: "React" },
      { img: redux, alt: "CMS" },
      { img: aws, alt: "AWS" },
      { img: git, alt: "git Version Control" },
    ],
    tasks: [
      "Site Search Functionality",
      "Shopping Cart",
      "Social Media Share",
      "Single Sign-on Authentication",
      "CMS Integration",
    ],
    link: "https://www.balodana.com/",
  },
  {
    name: "THE DIAMOND STORE",
    background: Pr5,
    collabtype: "Collabrative Work",
    description:
      "Jewelry manufacturer from India converted their front-end technology from Java-Spring to React for sake of speed and reliability.",
    techImages: [
      { img: react, alt: "React" },
      { img: material, alt: "material ui" },
      { img: sass, alt: "Sass" },
      { img: figma, alt: "figma" },
    ],
    tasks: ["Design Implemantations", "Facets Functionality"],
    link: "https://www.thediamondkart.com/",
  },
  {
    name: "Avetti Demo Marketplace",
    background: Pr2,
    collabtype: "Collabrative Work",
    description:
      "This marketplace has gathered various e-commerce functionalities. Thanks to its latest technology stack, it offers secure and fast e-shopping.",
    techImages: [
      { img: javascript, alt: "JavaScript" },
      { img: npm, alt: "npm" },
      { img: react, alt: "React" },
      { img: redux, alt: "redux" },
      { img: webpack, alt: "webpack" },
      { img: git, alt: "git Version Control" },
    ],
    tasks: [
      "React Component Developing",
      "Compare Feature Building",
      "Wish List Feature Building",
    ],
    link: "https://demob2b3shop.avetti.io/",
  },
  {
    name: "teamAR",
    background: Pr4,
    collabtype: "Collabrative Work",
    description:
      "teamAR is an Augmented Reality startup from Vancouver. They needed slick and simple design for their future customers and as a development team we provided what they're looking for.",
    techImages: [
      { img: gatsbyimg, alt: "Gatsby.JS" },
      { img: nodejs, alt: "Node.js" },
      { img: strapi, alt: "CMS" },
      { img: sass, alt: "Sass" },
      { img: pp, alt: "Photoshop" },
    ],
    tasks: ["Progressive Web App", "CMS Integration", "Design Implementations"],
    link: "https://teamar.ca",
  }
]
