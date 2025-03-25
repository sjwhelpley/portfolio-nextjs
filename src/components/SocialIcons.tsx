"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const icons = [
  {
    link: "https://www.linkedin.com/in/samanthawhelpley/",
    icon: faLinkedin,
  },
  { link: "https://github.com/sjwhelpley", icon: faGithub },
  { link: "mailto:samanthawhelpley@outlook.com", icon: faEnvelope },
];

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 mt-8">
      {icons.map((i) => (
        <a
          key={i.link}
          href={i.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#88dded]"
        >
          <FontAwesomeIcon icon={i.icon} size="xl" />
        </a>
      ))}
    </div>
  );
}
