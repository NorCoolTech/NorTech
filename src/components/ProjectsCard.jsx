import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { VscVmRunning } from "react-icons/vsc";
import Wrapper from "../assets/wrappers/ProjectCard";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <Wrapper>
      <article className="projects-card">
        <img src={img} alt={title} className="projects-card_image" />
        <div className="projects-card_content">
          <h2 className="projects-card_title">{title}</h2>
          <p className="projects-card_text">{text}</p>
          <div className="projects-card_links">
            <div className="projects-card_box">
              <p>run project</p>
              <a href={url} target="_blank">
                <VscVmRunning className="projects-card_link run" />
              </a>
            </div>
            <div className="projects-card_box">
              <p>code on github</p>
              <a href={github} target="_blank">
                <FaGithubSquare className="projects-card_link" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

export default ProjectsCard;
