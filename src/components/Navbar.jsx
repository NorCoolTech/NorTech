import { useState, useRef } from "react";
import { links, social } from "../data";
import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
 
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>

          <div className="links-container" style={linkStyle}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <li key={id}>
                    <Link
                      to={href}
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={50}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target="_blank">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
