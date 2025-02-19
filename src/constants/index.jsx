import {
  // FaXTwitter,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaDiscord,
  // FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTypescript, SiMysql } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
import { TbBrandRedux  } from "react-icons/tb";
// import { BiLogoPostgresql } from "react-icons/bi";s

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "DILIP KUMAR",
  greet: "Hello there! 👋🏻",
  description:
    "A Frontend Developer with 2 years of experience in React, TypeScript, and UI libraries like Chakra UI and Ant Design. Skilled in building responsive UIs, integrating APIs, and optimizing performance to enhance user experience.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/TangetiDK/Dilip_Porrtfolio",
  },
  {
    id: 2,
    name: "React Dashboard",
    description:
      "This dashboard app comes packed with essential features to streamline your data management tasks.",
    image: projectImage2,
    githubLink: "https://github.com/TangetiDK/react-dashboard",
  },
  {
    id: 3,
    name: "Crud Applications",
    description:
      "Developed a simple CRUD application using React.js, Spring Boot, and MySQL. Implemented basic operations for creating,reading, updating, and deleting records.",
    image: projectImage3,
    // githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Restaurent Website",
    description:
      "Designed a responsive restaurant site with an interactive menu and reservation system using HTML, CSS, and JavaScript.",
    image: projectImage4,
    githubLink: "https://github.com/TangetiDK/Project",
  },
  {
    id: 5,
    name: "TO-DO List",
    description:
      "Built a simple to-do list app using React.js . Implemented basic operations for creating, updating, and deleting data.",
    image: projectImage5,
    githubLink: "https://github.com/TangetiDK/CodeAlpha_Todo_List",
  },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "I am Dilip Kumar Tangeti, a passionate Front-End Developer with a B.Tech in Electronics and Communication Engineering from Usha Rama College of Engineering and Technology, where I graduated with a CGPA of 7.04. Currently, I work as a Software Engineer at Ascend International, where I focus on building efficient and scalable front-end solutions using React and TypeScript.",
  "Over the course of my career, I’ve had the opportunity to lead feature design, bug resolution, and optimization efforts, particularly in projects like Royal Stamp and Chill Baby, where I contributed to improving performance and enhancing user experiences. My work includes developing reusable UI components, integrating third-party services, and streamlining API and database interactions.",
  "In addition to my professional work, I’ve completed personal projects such as a portfolio website, a React dashboard, a restaurant website, and a full-stack CRUD application. These experiences have helped me hone my skills in modern front-end frameworks, collaborative team work, and delivering high-quality web applications.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1.9 years",
  },
  {
    icon: <AiOutlineJavaScript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Javascript",
    experience: "1.9+ year",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "TypeScript",
    experience: "1+ years",
  },
  {
    icon: <SiMysql className="text-4xl text-white lg:text-5xl" />,
    name: "MySQL",
    experience: "0.5 year",
  },
  {
    icon: <TbBrandRedux className="text-4xl text-purple-400 lg:text-5xl" />,
    name: "Redux",
    experience: "1+ years",
  },
  {
    icon: <FaGithub className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "0.5 year",
  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "Ascend International",
    duration: "Jan 2023 - Sep 2024",
    description:
      "As the Frontend Developer, I spearheaded the development of  web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering and Technology",
    institution: "Usha Rama College of Engineering and Technology",
    duration: "june 2018 - April 2022",
    description:
      "A B.tech Graduate in electronics and communication engineering. who has an eye for coding and an eagerness to learn new technologies.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/TangetiDK",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/dilipkumartangeti/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
