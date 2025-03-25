"use client";

import React, { useRef } from "react";

import Experience from "./Experience";
import About from "./About";
import Navigation from "./Navigation";
import Projects from "./Projects";

import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";
import ScrollRotatingImage from "@/components/ScrollRotatingImage";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-x-hidden">
      <section className="relative w-full lg:w-[30vw] lg:fixed lg:h-screen py-8 lg:py-16 pl-8 pr-4">
        <h1 className="text-4xl font-bold">Samantha Whelpley</h1>
        <h2 className="mt-3 text-xl">Frontend Engineer</h2>
        <p className="mt-4 text-md text-slate-300">
          I design and build intuitive interfaces, with a strong eye for detail
          and a commitment to quality code.
        </p>

        <ScrollRotatingImage scrollRef={scrollRef} />

        <Navigation />

        <div className="lg:absolute lg:bottom-16">
          <SocialIcons />
        </div>
      </section>

      <main
        ref={scrollRef}
        className="lg:w-[70vw] lg:ml-[30vw] lg:overflow-y-auto lg:overflow-x-hidden py-8 lg:py-16 space-y-16"
      >
        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <Footer />
      </main>
    </div>
  );
}
