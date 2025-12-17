import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import Section from "./Section";

type ExperienceItemType = {
  dates: string;
  currentPosition: string;
  pastPositions: string[];
  company: string;
  link: string;
  description: string;
  technologies: string[];
};

const experiences = [
    {
    dates: "April 2025 - Present",
    currentPosition: "Frontend Software Developer II",
    pastPositions: [],
    company: "HackerRank",
    link: "https://hackerrank.com/",
    description:
      `Work across large, legacy React/Rails codebases on the Self-Serve team, implementing features and resolving defects for company administration workflows.
      Build key components for Hiring Plan feature in a standalone Next.js + TanStack Query codebase, delivering an AI-assisted flow that transforms a user's job description into recommended coding tests and interviews, alongside a cleaner candidate tracking experience.
      Implement frontend components for a billing status banner that surfaced unpaid invoices and account lock states, prompting immediate user action and supporting faster invoice resolution and account reactivation.
      Deliver full-stack functionality for an experiment enabling free-trial and lower-tier users to preview higher-plan test questions, helping validate content value and inform upgrade conversion strategy.
      Modernize legacy areas by refactoring components from JavaScript to TypeScript and migrating Jest to Vitest, improving type safety, test speed, and overall code reliability.`,
    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "Ruby on Rails"
    ],
  },
  {
    dates: "May 2021 - March 2025",
    currentPosition: "Software Developer II",
    pastPositions: ["Software Developer I"],
    company: "VISIMO",
    link: "https://visimo.ai/",
    description:
      `Managed a team of 5 developers, contributing to sprint planning, task allocation, and budget management, improving coordination and communication with project managers.
      Mentored junior developers in frontend and design best practices, creating a structured learning path that doubled their productivity within three months.
      Lead the frontend development and maintenance of NIXN, a construction risk management platform, transitioning the legacy site from jQuery to an offline-first Progressive Web App (PWA) with a React and Apollo Client architecture, now supporting over 1000 users with an average of 500 form submissions per day.
      Developed the frontend for a USDA-funded risk management platform using React and Django REST, enhancing data reliability by making it offline-first with Redux Offline.
      Implemented unit testing strategies using Vitest across all projects, consistently achieving 80%+ code coverage, ensuring high code quality and reliability.`,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "MUI",
      "Django REST",
      "Apollo GraphQL",
    ],
  },
];

function ExperienceItem({ item }: { item: ExperienceItemType }) {
  return (
    <a
      href={item.link}
      target="_blank"
      className="group p-4 grid grid-cols-8 gap-4 mb-8 cursor-pointer border border-transparent rounded-md transition-colors hover:border-white"
    >
      <div className="col-span-2 mt-1">
        <p className="uppercase text-sm">{item.dates}</p>
      </div>
      <div className="col-span-6">
        <p className="font-bold text-lg text-white group-hover:text-[#88dded]">
          {item.currentPosition} · {item.company}{" "}
          <FontAwesomeIcon
            icon={faSquareArrowUpRight}
            className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </p>
        {item.description
          .split("\n")
          .map(
            (d) =>
              d !== "" && <li key={d} className="mt-2 text-slate-300">{d.trim()}.</li>
          )}
        <ul className="mt-2 flex flex-wrap">
          {item.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-[#88dded]/10 text-[#88dded] text-sm font-medium py-1 px-2 mr-1.5 mt-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function Experience() {
  return (
    <Section
      title="Experience"
      content={
        <>
          {experiences.map((item) => (
            <ExperienceItem key={item.company} item={item} />
          ))}
          <a
            href="/Whelpley_Resume.pdf"
            target="_blank"
            className="group font-bold text-white cursor-pointer hover:text-[#88dded]"
          >
            Full Resume{" "}
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </>
      }
    />
  );
}
