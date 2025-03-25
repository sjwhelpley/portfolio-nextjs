"use client";

import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects"];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -75% 0px", // trigger when section is halfway visible
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex flex-col justify-start space-x-0 space-y-4 mt-8">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setActiveSection(id)}
          className={activeSection === id ? "active" : ""}
        >
          <span className="group flex flex-row items-center">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16 group-hover:bg-slate-300 group-focus-visible:w-16 group-focus-visible:bg-slate-300 motion-reduce:transition-none"></span>
            <span
              className={`uppercase text-sm transition-colors ${
                activeSection === id
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              {id}
            </span>
          </span>
        </a>
      ))}
    </nav>
  );
}
