"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 mt-8">
      <a
        href="https://www.linkedin.com/in/samanthawhelpley/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-300"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>
      <a
        href="https://github.com/sjwhelpley"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-300"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>
      <a
        href="mailto:samanthawhelpley@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-300"
      >
        <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </a>
    </div>
  );
}
