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
  movierecs,
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
    experience: [
      {
        context: "LeetCode / DSA practice",
        detail:
          "My go-to language for data structures and algorithms problems; the one I'm most fluent in for algorithmic work.",
      },
    ],
  },
  {
    name: "React JS",
    icon: reactjs,
    experience: [
      {
        context: "Movie Recs",
        detail:
          "Next.js frontend with TanStack Query for filter search and similar-film recommendations.",
      },
      {
        context: "European Football Stats",
        detail:
          "Client app for match, player, and team stats in a pnpm monorepo.",
      },
    ],
  },
  {
    name: "Node JS",
    icon: nodejs,
    experience: [
      {
        context: "YouROK Internship",
        detail:
          "Rebuilt a legacy PHP backend as a Node.js/TypeScript GraphQL service.",
      },
      {
        context: "European Football Stats",
        detail:
          "Modular Express backend with daily jobs pulling match data from ESPN.",
      },
      {
        context: "Movie Recs",
        detail: "TypeScript backend API serving a 10,000+ film catalog.",
      },
    ],
  },
  {
    name: "TypeScript",
    icon: typescript,
    experience: [
      {
        context: "YouROK Internship",
        detail: "Typed GraphQL service replacing a legacy PHP backend.",
      },
      {
        context: "European Football Stats",
        detail:
          "Zod schemas and types shared between frontend and backend.",
      },
      {
        context: "Movie Recs",
        detail: "Full stack app written in TypeScript.",
      },
    ],
  },
  {
    name: "Docker",
    icon: docker,
    experience: [
      {
        context: "YouROK Internship",
        detail: "Containerized services with CI/CD pipelines on DigitalOcean.",
      },
    ],
  },
  {
    name: "Linux",
    icon: linux,
    experience: [
      {
        context: "Self-hosted deployments",
        detail:
          "Configured EC2 servers for my projects, including a Caddy reverse proxy with HTTPS.",
      },
      {
        context: "UCF network security project",
        detail:
          "Building a VPN/SSH tunneling test rig with tc netem network impairment.",
      },
    ],
  },
  {
    name: "MongoDB",
    icon: mongodb,
    experience: [
      {
        context: "Pegasus Parking",
        detail:
          "Used MongoDB and Mongoose to represent parking locations and coordinates.",
      },
    ],
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    experience: [
      {
        context: "European Football Stats",
        detail:
          "Relational schema for seasons, matches, and player stats with Drizzle ORM.",
      },
      {
        context: "Movie Recs",
        detail: "Film catalog with director, actor, and keyword filtering.",
      },
    ],
  },
  {
    name: "Supabase",
    icon: supabase,
    experience: [
      {
        context: "Movie Recs",
        detail: "Hosted Postgres database for the film catalog.",
      },
      {
        context: "European Football Stats",
        detail: "Hosted Postgres DB for match stats, players, odds, etc.",
      },
      {
        context: "France Travel Explorer",
        detail: "Hosted Postgres DB for French cities and geolocation data.",
      },
    ],
  },
  {
    name: "GitHub Actions",
    icon: githubactions,
    experience: [
      {
        context: "Movie Recs",
        detail:
          "Scheduled workflow that adds new releases to the catalog weekly.",
      },
      {
        context: "European Football Stats",
        detail:
          "Scheduled daily workflow to update match statistics, standings, odds, etc.",
      },
    ],
  },
  {
    name: "AWS",
    icon: aws,
    experience: [
      {
        context: "European Football Stats",
        detail: "EC2 backend behind API Gateway inside a VPC.",
      },
      {
        context: "Movie Recs",
        detail: "Backend hosted on EC2 with Caddy for HTTPS.",
      },
      {
        context: "UCF network security project",
        detail:
          "EC2 instances hosting a VPN/SSH tunneling performance test rig.",
      },
    ],
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
    points: [
      "Rebuilt a legacy PHP backend as a Node.js and TypeScript service with GraphQL.",
    ],
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
    id: "project-3",
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
  {
    id: "project-5",
    name: "Movie Recs",
    description:
      "Recommends similar films and lets you browse 10,000+ movies by genre, decade, language, and more.",
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
    image: movierecs,
    repo: "https://github.com/seanprevity/movie-recs",
    demo: "https://drive.google.com/file/d/1PFMo24ALguDorXwu98f1lh9ukSbSXUxq/view?usp=sharing",
  },
];

export { services, technologies, experiences, projects };
