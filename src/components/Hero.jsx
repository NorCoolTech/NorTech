import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Wrapper from "../assets/wrappers/Hero";
import CV from "../assets/CV/Norbert Kulacin.pdf";
 
const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="hero-container">
        <article className="hero-info">
          <h1 className="hero-title">
            Welcome
            <br />
            I'm Norbert
          </h1>

          <p className="hero-subtitle">
            Senior Project Manager | Future-Focused on Front-End Development
          </p>
          <p className="hero-description">
            "Let's Transform Creativity Into Code Together and Bring Imagination
            to Life Through Web Interactivity."
          </p>
          <div className="hero-contact">
            <div className="hero-download">
              <a href={CV} download>
                Download CV
              </a>
              <IoCloudDownloadSharp />
            </div>
            <div className="hero-email">
              <a href={`mailto:norbert.kulacin@gmail.com`}>Email me</a>
              <MdEmail />
            </div>
            <div className="hero-social-links">
              <a href="#">
                <FaGithubSquare />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </article>
        <article>
          <img src={heroImg} className="hero-image" alt="Hero" />
        </article>
      </div>
    </Wrapper>
  );
};

export default Hero;
