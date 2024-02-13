import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import Wrapper from "../assets/wrappers/Projects";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <Wrapper id="projects">
      <section className="projects-section">
        <SectionTitle text="projects" />
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectsCard {...project} />
            </div>
          ))}
        </Slider>
      </section>
    </Wrapper>
  );
};

export default Projects;
