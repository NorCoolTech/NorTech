import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { BsBoxArrowInUp } from "react-icons/bs";

const ScrollToTopButton = styled.button`
  /* position: fixed; */
  /* position: fixed; */
  position: relative;
  bottom: 150px;
  right: 100px;
  margin-left: 90%;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 4rem;
  cursor: pointer;
  transition: var(--transition);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--primary-900);
    color: var(--primary-400);
  }
`;

const ScrollToTop = () => {
    const scrollToTop = () => {
      const options = {
        duration: 50,
        smooth: true,
        delay: 100,
      };

    scroll.scrollToTop(options);
  };

  return (
    <ScrollToTopButton onClick={scrollToTop}><BsBoxArrowInUp/> </ScrollToTopButton>
  );
};

export default ScrollToTop;
