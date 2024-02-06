import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";
import Wrapper from "../assets/wrappers/Skills";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <section className="skills-center">
        <SectionTitle text="Tech Stack" />
        <div className="skills-container">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
