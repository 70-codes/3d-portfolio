import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  kali,
  metasploit,
  wireshark,
} from "../assets";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Kali Linux",
    icon: kali,
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
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const overview = {
  title: "Overview",
  overview: `
  The following projects I have completed showcase my expertise in developing
  and implementing innovative solutions across various technologies. From building
  a comprehensive user management system with FastAPI and SQLAlchemy to designing
  interactive React components for a dynamic portfolio website, my work demonstrates
  a strong proficiency in both frontend and backend development. Each project
  highlights my ability to create robust, user-friendly applications, integrate
  advanced features, and deliver high-quality results. These experiences reflect
  my commitment to leveraging modern technologies to solve complex problems and
  enhance user experiences.
  `,
};

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ICT Tutor",
    company_name: "The King David School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Teaching young kids how to interact with technological devices.",
      "Collabaration with the school administration to run IT contests within the school.",
      "Developed and managed different computer systems and other digital devices in the school.",
      "Created and managed different documentation in the school.",
      "Enabled the school have a smooth transition from manual to digital devices to enhance perfomance and accuracy.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Smart Writers LTD",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cyber Security Professional",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining computer systems using various security software and hardware tools such as firewalls and IDS.",
      "Creation and Implementation of different network configurations such as VPN, on routers, switches and end devices.",
      "Use of Linux OS and wireshark tools to assess vulnerabilities with computer systems.",
      "Participating in different hackathons to gain insight and knowledge from peers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "To be included....",
    name: "N/A",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "To be included....",
    name: "N/A",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "To be included...",
    name: "N/A",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projectsOverview = {
  title: "Projects",
  overview: `
  The following projects I have completed showcase my expertise in developing
   and implementing innovative solutions across various technologies. From
   building a comprehensive user management system with FastAPI and SQLAlchemy
   to designing interactive React components for a dynamic portfolio website,
   my work demonstrates a strong proficiency in both frontend and backend
   development. Each project highlights my ability to create robust, 
   user-friendly applications, integrate advanced features, and deliver 
   high-quality results. These experiences reflect my commitment to leveraging
   modern technologies to solve complex problems and enhance user experiences.
  `,
};

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  overview,
  projectsOverview,
};
