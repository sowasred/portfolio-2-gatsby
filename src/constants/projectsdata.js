import react from "../images/react.png"
import pp from "../images/pp.png"
import aws from "../images/aws.png"
import git from "../images/git.png"
import redux from "../images/redux.png"
import javascript from "../images/javascript.png"
import npm from "../images/npm.png"
import webpack from "../images/webpack.png"
import sass from "../images/sass.png"
import jquery from "../images/jquery.png"
import vue from "../images/vue.png"

import gatsbyimg from "../images/gatsby.png"
import nodejs from "../images/nodejs.png"
import figma from "../images/figma.png"
import strapi from "../images/strapi.png"
import material from "../images/material.png"
import bootstrap from "../images/bootstrap.png"
import stripe from "../images/stripepng.png"
import python from "../images/python.png"
import sendgrid from "../images/sendgrid.jpg"
import postgresql from "../images/postgres.png"
import redis from "../images/redis.png"
import telegram from "../images/telegram.png"
import whatsapp from "../images/whatsapp.jpg"
import nextjs from "../images/nextjs.jpg"
import pinecone from "../images/pinecone.png"
import openai from "../images/openai.png"
import typescript from "../images/typescript.png"
import nestjs from "../images/nestjs.png"


import Pr1 from "../images/screenshotbaladon.png"
import Pr1B from "../images/balodana.png"
import Pr2 from "../images/screenshotB2BC.png"
import Pr2B from "../images/demomarketplace.png"

import Pr4 from "../images/teamarnew.png"
import Pr5 from "../images/screenshotdiamondcart.png"
import Pr6 from "../images/screenshotDK.png"
import Pr6B from "../images/destinationkohler.png"
import Pr7 from "../images/screenshotFoxhills.png"
import Pr8 from "../images/yt1.png"
import Pr9 from "../images/yt2.png"
import Pr10 from "../images/yt3.png"
import Pr11 from "../images/Thrive.png"
import Pr12 from "../images/Boostapp.png"
import Pr13 from "../images/replyfan.jpeg"

export default [
    {
      "name": "ReplyFan - AI Persona Platform",
      "background": Pr13, // Replace with the actual image path
      "collabtype": "Founder Project",
      "description": "ReplyFan is an AI persona platform that turns creators’ content into interactive chatbots on WhatsApp and Telegram. It enables fans to have authentic, ongoing conversations with their favorite creators while monetizing engagement through subscriptions.",
      "techImages": [
        { "img": typescript, "alt": "TypeScript" },
        { "img": react, "alt": "React" },
        { "img": nextjs, "alt": "Next.js" },
        { "img": nodejs, "alt": "Node.js" },
        { "img": redis, "alt": "Redis" },
        { "img": postgresql, "alt": "PostgreSQL" },
        { "img": stripe, "alt": "Stripe" },
        { "img": pinecone, "alt": "Pinecone" },
        { "img": openai, "alt": "OpenAI" },
        { "img": telegram, "alt": "Telegram API" },
        { "img": whatsapp, "alt": "WhatsApp API" },
      ],
      "tasks": [
        "Architected a mono-repo microservice system with Redis-based BullMQ queues for event-driven communication between services.",
        "Developed a YouTube content pipeline that ingests video transcripts, cleans text, and generates OpenAI embeddings stored in Pinecone for RAG-based retrieval.",
        "Built a conversation engine that dynamically combines chat history and relevant transcript context to produce real-time responses via GPT-4-powered LLMs.",
        "Integrated Stripe subscriptions and access control, enabling free limited messaging and paid premium fan interactions with voice/text support.",
        "Connected multi-channel message adapters for WhatsApp and Telegram with webhooks for real-time two-way messaging."
      ],
      "link": "https://replyfan.com/"
    },
    {
    "name": "YouTube Analyzer - Chrome Extension",
    "background": Pr10, // Replace with the actual path
    "collabtype": "Collabrative Work",
    "description": "YouTube Analyzer Chrome Extension is a powerful tool designed for YouTube enthusiasts and content creators. Leveraging GPT for natural language processing, this extension provides on-the-fly video summaries and in-depth sentiment analysis of comments directly within the YouTube interface.",
    "techImages": [
      { "img": gatsbyimg, "alt": "Gatsby.JS" },
      { "img": nodejs, "alt": "Node.js" },
      { "img": react, "alt": "React" },
      { "img": redux, "alt": "Redux" },
      { "img": javascript, "alt": "JavaScript" },
      { "img": npm, "alt": "npm" },
      { "img": webpack, "alt": "Webpack" },
      { "img": sass, "alt": "Sass" },
      { "img": git, "alt": "git Version Control" },
      // {"img": sendgrid, "alt": "SendGrid"},
      {"img": python, "alt": "Python"},
      {"img": postgresql, "alt": "PostgreSQL"},
      {"img": stripe, "alt": "Stripe"},
    ],
    "tasks": [
      "Developed a dynamic data visualization interface for YouTube analytics",
      "Implemented OAuth for secure YouTube account integration",
      "Enabled real-time data fetching and analysis of YouTube channels and videos",
      "Optimized the application for performance and scalability"
      // Add more tasks as necessary
    ],
    "link": "https://youtubeanalyzer.tech/" // Replace with the actual project link if different
  },
  {
    "name": "Boost&Thrive - Food Ordering Application",
    "background": [Pr12, Pr11], // Replace with the actual path
    "collabtype": "Collabrative Work",
    "description": "Developed and maintained backend microservices powering the Boost and Thrive food-ordering platforms. Contributed to core domains such as Order, Shopping Cart, Discount, Promo, and Location services within a distributed, event-driven architecture. Leveraged AWS (Lambda, EventBridge, SQS, DynamoDB, RDS PostgreSQL) to build scalable, fault-tolerant infrastructure supporting thousands of daily transactions.",
    "techImages": [
      { "img": typescript, "alt": "TypeScript" },
      { "img": nodejs, "alt": "Node.js" },
      { "img": nestjs, "alt": "NestJS" },
      { "img": vue, "alt": "Vue.js" },
      {"img": postgresql, "alt": "PostgreSQL"},
      {"img": figma, "alt": "Figma"},
      {"img": aws, "alt": "AWS"},
    ],
    "tasks": [
      "Built and maintained backend microservices for Order, Shopping Cart, Discount, Promo, and Location domains within an event-driven architecture.",
      "Integrated AWS EventBridge and SQS for asynchronous communication between microservices, improving system scalability and fault tolerance.",
      "Designed and optimized data models using DynamoDB and PostgreSQL for high-performance and reliable data persistence.",
      "Developed APIs in Node.js following clean architecture and repository patterns to ensure modular and maintainable code.",
      "Implemented caching, validation, and monitoring layers to enhance service reliability and observability.",
      "Collaborated with front-end, DevOps, and QA teams to align backend delivery with product and UI requirements.",
      "Contributed to AWS infrastructure provisioning and deployment pipelines, leveraging Lambda, ECS, and CloudFormation.",
      "Participated in system-wide performance tuning, incident resolution, and continuous integration improvements."    ],
    "link": "https://boostapp.io/" // Replace with the actual project link if different
  },
  {
    name: "balodana - Custom Clothing Platform",
    background: Pr1B,
    collabtype: "Collabrative Work",
    description:
      "Balodana is transforming fashion by creating custom women's clothing. It challenges fast fashion with a platform that connects you to worldwide designers and dressmakers for personalized, perfectly fitting clothes.",
    techImages: [
      { img: javascript, alt: "JavaScript" },
      { img: npm, alt: "npm" },
      { img: react, alt: "React" },
      { img: redux, alt: "redux" },
      { img: strapi, alt: "CMS" },
      { img: aws, alt: "AWS" },
      { img: figma, alt: "figma" },
      { img: material, alt: "material ui" },
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
    name: "Destination Kohler - Hotel Booking Application",
    background: Pr6B,
    collabtype: "Collabrative Work",
    description:
      "Booking your visit to Destination Kohler online offers a seamless experience, allowing you to easily select and secure hotel stays, spa appointments, golf tee times, and dining reservations. This streamlined online booking ensures planning your ideal visit is quick and stress-free.",
    techImages: [
      { img: javascript, alt: "JavaScript" },
      { img: jquery, alt: "jQuery" },
      { img: vue, alt: "Vue.js" },
      { img: nodejs, alt: "Node.js" },
      { img: bootstrap, alt: "bootstrap" },
      { img: git, alt: "git Version Control" },
    ],
    tasks: [
      "Skinning the whole UI according to brand guidelines",
      "Configured UI according to users' access restrictions",
      "Developed custom features with respect to client needs",
    ],
    link: "https://reservations.destinationkohler.com/dk/",
  },
  {
    name: "Avetti Demo Marketplace",
    background: Pr2B,
    collabtype: "Collabrative Work",
    description:
      "This marketplace integrates a wide range of online shopping features, leveraging advanced technology to ensure a safe and speedy online shopping experience. Its modern tech infrastructure supports a variety of e-commerce capabilities, providing users with a reliable and efficient way to shop online.",
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
    link: "https://avetticommerce.com/demo-stores/",
  },
  {
    name: "Foxhills - Hotel Booking Application",
    background: Pr7,
    collabtype: "Collabrative Work",
    description:
      "Booking online at Foxhills offers an easy and quick way to organize your visit, allowing you to choose from staying in their cozy rooms, relaxing with spa treatments, playing tennis or golf, joining adult or junior activities, and enjoying their dining options. This efficient online booking lets you plan the perfect visit without any hassle.",
    techImages: [
      { img: javascript, alt: "JavaScript" },
      { img: jquery, alt: "jQuery" },
      { img: vue, alt: "Vue.js" },
      { img: nodejs, alt: "Node.js" },
      { img: bootstrap, alt: "bootstrap" },
      { img: git, alt: "git Version Control" },
    ],
    tasks: [
      "Site Search Functionality",
      "Shopping Cart",
      "Social Media Share",
      "Single Sign-on Authentication",
      "CMS Integration",
    ],
    link: "https://rsweb.foxhills.co.uk/#/",
  },
  
  // {
  //   name: "THE DIAMOND STORE",
  //   background: Pr5,
  //   collabtype: "Collabrative Work",
  //   description:
  //     "Jewelry manufacturer from India converted their front-end technology from Java-Spring to React for sake of speed and reliability.",
  //   techImages: [
  //     { img: javascript, alt: "JavaScript" },
  //     { img: npm, alt: "npm" },
  //     { img: react, alt: "React" },
  //     { img: redux, alt: "redux" },
  //     { img: bootstrap, alt: "bootstrap" },
  //     { img: sass, alt: "Sass" },
  //     { img: figma, alt: "figma" },
  //     { img: git, alt: "git Version Control" },
  //   ],
  //   tasks: ["Design Implemantations", "Facets Functionality"],
  //   link: "https://www.thediamondkart.com/",
  // },
  // {
  //   name: "teamAR",
  //   background: Pr4,
  //   collabtype: "Collabrative Work",
  //   description:
  //     "teamAR is an Augmented Reality startup from Vancouver. They needed slick and simple design for their future customers and as a development team we provided what they're looking for.",
  //   techImages: [
  //     { img: gatsbyimg, alt: "Gatsby.JS" },
  //     { img: nodejs, alt: "Node.js" },
  //     { img: strapi, alt: "CMS" },
  //     { img: sass, alt: "Sass" },
  //     { img: pp, alt: "Photoshop" },
  //   ],
  //   tasks: ["Progressive Web App", "CMS Integration", "Design Implementations"],
  //   link: "https://teamar.ca",
  // }
]
