
import web from "../assets/web.png"
import backend from "../assets/backend.png"

import  html  from "../assets/tech/html.png"; 
import  css  from "../assets/tech/css.png";
import  git  from "../assets/tech/git.png";
import  javascript  from "../assets/tech/javascript.png";
import  typescript  from "../assets/tech/typescript.png";
import  reactjs  from "../assets/tech/reactjs.png";
import  redux  from "../assets/tech/redux.png";
import  tailwind  from "../assets/tech/tailwind.png";
import  nodejs  from "../assets/tech/nodejs.png";
import  mongodb  from "../assets/tech/mongodb.png";
import  threejs  from "../assets/tech/threejs.svg";
import  figma  from "../assets/tech/figma.png";
import  docker  from "../assets/tech/docker.png";
import htmlCssJs from "../assets/company/htmlCssJs.jpg"
import htmlIcon from "../assets/company/html.png"
import reactTs from "../assets/company/reactTs.png"
import nodeJs from "../assets/company/nodeJs.jpg"
import cryptoBild from "../assets/cryptoBild.png"
import aehBild from "../assets/AEH.png"





  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
  
    {
      title: "Backend Developer",
      icon: backend,
    },
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HTML | CSS",
      company_name: "dci career institute",
      icon: htmlIcon,
      iconBg: "#383E56",
      date: "Jun 2023 - April 2023",
      points: [
        "From June 2023 to April 2024, I focused on learning Git, HTML, and CSS.",
        "I mastered version control with Git, allowing me to efficiently manage and track code changes.",
        "I gained expertise in HTML, which enabled me to structure web content effectively.",
        "I also developed strong skills in CSS, creating responsive and visually appealing web designs",
      ],
    },
    {
      title: "HTML | CSS | GIT | JavaScript",
      company_name: "dci career institute ",
      icon: htmlCssJs,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Aug 2023",
      points: [
        "From April 2023 to August 2023, I expanded my knowledge by learning HTML, CSS, and JavaScript.",
        "I strengthened my understanding of HTML and CSS, enabling me to create more complex and responsive web layouts.",
        "I developed proficiency in JavaScript, allowing me to add interactivity and dynamic features to web applications.",
        "During this period, I built several projects to solidify my skills in front-end development.",
      ],
    },
    {
      title: "REACT JS | REACT TS",
      company_name: "dci career institute",
      icon: reactTs,
      iconBg: "#383E56",
      date: "Aug 2023 - Dez 2023",
      points: [
        "From August 2023 to December 2023, I focused on learning React and TypeScript to enhance my front-end development skills.",
        "I gained proficiency in building scalable web applications using React's component-based architecture.",
        "I learned how to implement state management solutions with Redux and React's Context API to handle complex application states.",
        "I built several projects during this time, incorporating advanced concepts like TypeScript, Redux, and AppContext for more robust and maintainable code.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "dci career institute",
      icon: nodeJs,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Mai 2024",
      points: [
        "From January 2024 to May 2024, I focused on learning Node.js and MongoDB, completing my full-stack development skills.",
        "I gained a deep understanding of server-side programming with Node.js, building APIs and handling asynchronous operations.",
        "I learned how to design and manage databases with MongoDB, implementing CRUD operations and ensuring efficient data storage.",
        "During this period, I built several backend-focused projects, connecting Node.js applications to MongoDB to create dynamic, full-stack web solutions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      id: "1",
      name: "crypto-curruncy",
      description:
        "Web-based platform that allows users to search, Coin , and analyse Chart .",
      tags: [
        {
          id: "1",
          name: "react",
          color: "blue-text-gradient",
        },
        {
          id: "2",
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          id: "3",
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cryptoBild, 
      source_code_link: "https://github.com/Khalilo1902?tab=repositories",
      link:"https://khalil-dev.me",
    },
    {
      id: "2",
      name: "AEH",
      description:
        "Web-based platform that helps people with disabilities.",
      tags: [
        {
          id: "1",
          name: "react",
          color: "blue-text-gradient",
        },
        {
          id: "2",
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aehBild, 
      source_code_link: "https://github.com/Khalilo1902?tab=repositories",
      link:"https://aeh-collaboration-medlaaribis-projects.vercel.app/organisation",
    },
  
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };