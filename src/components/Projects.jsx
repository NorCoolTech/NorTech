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
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1500,
        },
      },
    ],
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
