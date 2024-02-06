import React from "react";
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
import Wrapper from '../assets/wrappers/About';

const About = () => {
  



  return (
    <Wrapper id="about">
      <section className="about-center">
        <div className="about-container">
          <img src={aboutSvg} alt="about" className="about-img" />
          <article className="about-me">
            <SectionTitle text="about me" />
            <p className="about-text">
              Hello! I'm Norbert Kulacin, an IT professional based in Serbia,
              Novi Sad, with over 15 years of diverse experience. My passion for
              IT and coding has driven my journey within the industry, and I'm
              now focused on transitioning to a front-end developer position.
              Eager to explore new technologies, I bring a wealth of experience
              and a keen learning mindset to the table. <br />
              <br />
              I'm actively seeking job opportunities where I can contribute,
              learn, and grow. If you have a fitting opportunity that aligns
              with my skills and experience, feel free to reach out. I'm excited
              about the prospect of connecting and exploring new possibilities.
            </p>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;