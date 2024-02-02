import React from "react";
import styled from "styled-components";

const StyledSectionTitleWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 5px;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%);
    border-radius: 50%;
  }
`;

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  padding: 0.5rem;
  text-transform: capitalize;
  background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionTitle = ({ text }) => {
  return (
    <StyledSectionTitleWrapper>
      <StyledTitle>{text}</StyledTitle>
    </StyledSectionTitleWrapper>
  );
};

export default SectionTitle;
