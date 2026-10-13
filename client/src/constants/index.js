import {
  frontend,
  backend,
  typescript,
  reactjs,
  nodejs,
  docker,
  postgresql,
  pegpark,
  coverhunt,
  francetravel,
  babble,
  yourok,
  database,
  cybersecurity,
  EPL,
  supabase,
  aws,
  linux,
  githubactions,
  mongodb,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineering",
    icon: database,
  },
  {
    title: "Cybersecurity & Research",
    icon: cybersecurity,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "GitHub Actions",
    icon: githubactions,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "AI Tester (Freelance)",
    company_name: "Outlier",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Apr 2025 - Dec 2025",
  },
  {
    title: "Software Engineer Intern",
    company_name: "YouROK",
    icon: yourok,
    iconBg: "#333333",
    date: "Feb 2026 - May 2026",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Pegasus Parking",
    description:
      "Finds the closest available UCF parking locations based on your destination and parking permit.",
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
    image: pegpark,
    repo: "https://github.com/seanprevity/pegasus-parking",
    demo: "https://drive.google.com/file/d/1vXKBOCBq1IBONN2DMke0NKK5voBxYzjZ/view?usp=drive_link",
  },
  {
    id: "project-2",
    name: "EU Football",
    description:
      "Tracks standings, match results, and player statistics across Europe's top five football leagues.",
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
    image: EPL,
    repo: "https://github.com/seanprevity/EPL-Stats",
    demo: "https://drive.google.com/file/d/1m46b7lAmF2CD6xWFxFJ_KoDSKos1FiV7/view?usp=sharing",
  },
  {
    id: "project-3",
    name: "Explore France",
    description:
      "Explore cities across France with information available in both English and French.",
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
    image: francetravel,
    repo: "https://github.com/seanprevity/france-travel-helper",
    demo: "https://drive.google.com/file/d/1ob16fh3v_XtccGWU5MAkl-xiThtY_URc/view?usp=sharing",
  },
  {
    id: "project-4",
    name: "Babble",
    description:
      "Translates text and documents using open-source AI models in an interactive web application.",
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
    image: babble,
    repo: "https://github.com/seanprevity",
    demo: "https://drive.google.com/file/d/1sJXnu_nxVZQMgUMSfF954oOAMUJ1fU5_/view?usp=sharing",
  },
];

export { services, technologies, experiences, projects };
