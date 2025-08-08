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
  mealOrderer,
  travel,
  tripguide,
  linux,
  python,
  ms,
  ac,
  ietech,
  sbsc,
  Israel,
  Ojo,
  Festus,
  rust,
  solidity,
  aws,
  ytmini,
  summarize,
  oneStream,
  gtco,
  dotnet,
  csharp,
  sql
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".Net",
    icon: dotnet,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
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
    name: "Python",
    icon: python,
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
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Backend Developer ",
    company_name: "Guaranty Trust Bank",
    icon: gtco,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Migrated all of GTCO's USSD and Airtime Services from Basis Core Banking to Finacle Core Banking system",
      "Managed and developed new features on the *737# GTB USSD banking using Asp.net, C# and SQL",
      "Maintained the bill payments code base and portal for over 500 merchants, ensuring smooth and secure transactions for customers.",
      "Worked swiftly to resolve multiple CBN exceptions and also implemented several features mandated by the CBN across multiple applications ",
    ],
  },
  {
    title: "Fullstack Developer ",
    company_name: "Microsystems",
    icon: ms,
    iconBg: "#383E56",
    date: "March 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, Java, Express.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to trainee developer.",
    ],
  },
  {
    title: "Blockchain Developer (Contract)",
    company_name: "App Central Group",
    icon: ac,
    iconBg: "#E6DEDD",
    date: "January 2022 - March 2022",
    points: [
      "Developing and maintaining full stack blockchain applications using React.js, SOlidity, Rust and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "React Developer (Contract)",
    company_name: "SBSC",
    icon: sbsc,
    iconBg: "#E6DEDD",
    date: "November 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js, Redux and other related technologies.",
      "Handled multiple concurrent API requests, state management and real-time market data using Redux",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Software Developer (Internship)",
    company_name: "Ietech",
    icon: ietech,
    iconBg: "#383E56",
    date: "September 2018 - March 2019",
    points: [
      "Learnt the basics of web development using html, css and javascript",
      "Contributed to the Zenith bank’s mobile and internet banking web application projects under the guidance of experienced software engineers using JavaScript and SQL",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Andrew proved me wrong.",
    name: "Festus Omole",
    designation: "Software Developer",
    company: "Meta",
    image: Festus,
  },
  {
    testimonial:
      "I've never met a web developer who is as dedicated to his work as Andrew",
    name: "Bakare Israel",
    designation: "Software Developer",
    company: "Bloomberg LP",
    image: Israel,
  },
  {
    testimonial:
      "After Andrew optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ojo Babatunde",
    designation: "Software Developer",
    company: "Bloomberg LP",
    image: Ojo,
  },
];

const projects = [
  {
    name: "Meal-Orderer",
    description:
      "An application that allows customers to make food orders and helps the food vendor know what the customers want to eat.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: mealOrderer,
    source_code_link:
      "https://github.com/andyriles/meal-ordering-service-backend",
  },
  {
    name: "OneStream",
    description: "Obtain information about your favourite movies and TV shows ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tbdb API",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "blue-text-gradient",
      },
    ],
    image: oneStream,
    source_code_link: "https://github.com/andyriles/oneStream",
    live_demo: "https://one-stream-nine.vercel.app/",
  },
  {
    name: "Sumz",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "RTK Query",
        color: "green-text-gradient",
      },
    ],
    image: summarize,
    source_code_link: "https://github.com/andyriles/AI-Summarizer",
    live_demo: "https://ai-summarizer-chi.vercel.app/",
  },
  {
    name: "Youtube-mini",
    description:
      "A comprehensive youtube clone that allows you watch your favourite youtube videos and podcasts",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: ytmini,
    source_code_link: "https://github.com/andyriles/youtube-mini",
    live_demo: "https://youtube-mini-two.vercel.app/",
  },
  {
    name: "Geodash",
    description:
      "Web application that A travel companion app that gives you a review of the best restaurants, hotels and attractions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "blue-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/andyriles/Geodash",
    live_demo: "https://geo-dash.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
