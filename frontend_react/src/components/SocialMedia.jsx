import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a target="_blank" rel="noreferrer" href="https://github.com/Parth-1602">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/parth-sharma-b3b441150/"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.hashnode.com/@Parth1602"
      >
        <div>
          <SiHashnode />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
