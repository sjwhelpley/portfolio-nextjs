import Image, { StaticImageData } from "next/image";

import Section from "./Section";
import calculator from "../../public/calc.png";
import form from "../../public/form.png";
import bnb from "../../public/bnb-consumer.png";
import finance from "../../public/finance.png";

type ProjectType = {
  img: StaticImageData;
  title: string;
  link: string;
  description: string;
  technologies: string[];
};

const projects = [
  {
    img: finance,
    title: "Personal Finance App",
    link: "https://github.com/sjwhelpley/frontendmentor-personal-finance-app",
    description:
      "Work in progress! FrontendMentor project: responsive personal finance application built with Next.js and TypeScript.",
    technologies: ["TypeScript", "Next.js", "React", "TailwindCSS"],
  },
  {
    img: form,
    title: "Multi-Step Form",
    link: "https://github.com/sjwhelpley/frontendmentor-multi-step-form",
    description:
      "FrontendMentor project: multi-step form with validation built with React and TypeScript.",
    technologies: ["TypeScript", "React", "Redux Toolkit", "MUI"],
  },
  {
    img: calculator,
    title: "Themed Calculator",
    link: "https://github.com/sjwhelpley/frontendmentor-calculator",
    description:
      "FrontendMentor project: functional calculator utilizing CSS variables to handle multiple themes.",
    technologies: ["JavaScript", "React", "CSS"],
  },
  {
    img: bnb,
    title: "Bnb (Airbnb clone)",
    link: "https://github.com/sjwhelpley/fs-bnb",
    description:
      "Full-stack application built as part of iXperience's Full Stack Coding bootcamp. Consists of 4 parts: API, app for renters, app for providers, and admin portal.",
    technologies: ["TypeScript", "Angular", "Ionic", "Express", "MySQL"],
  },
];

function ProjectItem({ item }: { item: ProjectType }) {
  return (
    <a
      href={item.link}
      target="_blank"
      className="group p-4 grid grid-cols-8 gap-4 mb-8 cursor-pointer border border-transparent rounded-md transition-colors hover:border-white"
    >
      <div className="col-span-2 mt-1">
        <Image src={item.img} alt={item.title} />
      </div>
      <div className="col-span-6">
        <p className="font-bold text-white group-hover:text-teal-300">
          {item.title}{" "}
          <i className="fa-solid fa-square-arrow-up-right ml-1 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </p>
        <p className="mt-2 text-slate-300">{item.description}</p>
        <ul className="mt-2 flex flex-wrap">
          {item.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-teal-300/10 text-teal-300 text-sm font-medium py-1 px-2 mr-1.5 mt-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <Section
      title="Projects"
      content={
        <>
          {projects.map((item) => (
            <ProjectItem key={item.title} item={item} />
          ))}
        </>
      }
    />
  );
}
