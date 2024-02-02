import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
import Wrapper from '../assets/wrappers/About';

const About = () => {
    return (
      <Wrapper>
        <section className="about-center" id="about">
          <div className="about-container">
            <img src={aboutSvg} alt="about" className="about-img" />
            <article className="about-me">
              <SectionTitle text="about me" />
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                impedit voluptatem deserunt. Labore dicta doloremque obcaecati
                error, enim at corrupti provident, perferendis blanditiis cum
                tempore dolores officia rem quasi nam. Ducimus tempore
                praesentium totam assumenda. Reiciendis, nesciunt. Libero modi
                iusto, ducimus facere cupiditate laborum sint, assumenda, autem
                officia voluptas culpa doloribus commodi voluptates. Quia
                ratione dolorem mollitia quaerat vel repudiandae?
              </p>
            </article>
          </div>
        </section>
      </Wrapper>
    );
};

export default About;