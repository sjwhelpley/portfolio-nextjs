import Section from "./Section";

export default function About() {
  return (
    <Section
      title="About"
      content={
        <>
          <p className="text-slate-300">
            I&apos;m a frontend software engineer with a strong foundation in building
            modern web applications using React, Redux, and design systems.
            I&apos;m drawn to solving tricky problems, whether it&apos;s tracking
            down bugs, untangling edge cases, or turning vague ideas
            into clear technical requirements. I take pride in my attention to
            detail and enjoy working through the nuances that turn a good
            product into a great one. While I&apos;m always expanding my backend
            skills, my focus remains on creating intuitive, maintainable, and 
            well-tested user interfaces.
          </p>

          <p className="mt-3 text-slate-300">
            Currently, I am a Frontend Software Engineer II
            at{" "}
            <a
              href="https://hackerrank.com/"
              className="font-bold text-white hover:text-[#88dded]"
              target="_blank"
            >
              HackerRank
            </a>{" "}on the Self-Serve team.
          </p>

          <p className="mt-3 text-slate-300">
            Previously, I was a Software Developer II and software team lead
            at{" "}
            <a
              href="https://visimo.ai/"
              className="font-bold text-white hover:text-[#88dded]"
              target="_blank"
            >
              VISIMO
            </a>
            , where I led the frontend development of complex applications
            across industries like agriculture, construction, and defense. I
            introduced and championed practices like unit testing, PWA support,
            and reusable design systems, helping shape a more maintainable and
            reliable development process. I also mentored junior developers,
            collaborated closely with designers and data scientists, and managed
            both team structure and project planning across multiple
            initiatives.
          </p>

          <p className="mt-3 text-slate-300">
            Earlier in my journey, I studied Information Science at the
            University of Pittsburgh, where I deepened my understanding of
            software design, data, and user-centered development. During
            college, I also completed internships at{" "}
            <a
              href="https://www.responsival.com/"
              className="font-bold text-white hover:text-[#88dded]"
              target="_blank"
            >
              Responsival
            </a>{" "}
            and{" "}
            <a
              href="https://redtreewebdesign.com/"
              className="font-bold text-white hover:text-[#88dded]"
              target="_blank"
            >
              RedTree Web Design
            </a>
            , where I learned the fundamentals of planning and wireframing
            applications, translating ideas into thoughtful designs, and
            refining the details that make interfaces feel seamless.
          </p>

          <p className="mt-3 text-slate-300">
            I&apos;m currently looking for new opportunities where I can
            continue growing my skills and collaborating with a thoughtful,
            driven team. I&apos;m especially excited by roles that offer a mix
            of design-minded development, interesting technical challenges, and
            opportunities to contribute to a healthy engineering culture. I
            bring experience leading teams and shipping production-ready
            applications—and I&apos;m eager to keep learning and building with
            others who care about their craft.
          </p>
        </>
      }
    />
  );
}
