import React from "react";
import styled from "styled-components";

const StyledSkillsCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--grey-50);
  border: 0.5px solid var(--white);
  border-radius: 0.5rem;
  padding: 1.75rem;
  box-shadow: var(--shadow-2);
`;

const StyledIcon = styled.span`
  height: 4rem; 
  width: 4rem;
  color: var(--grey-600); 
  font-size: 3.5rem;
`;

const StyledTitle = styled.h4`
  margin-top: 0.75rem; 
  font-weight: bold;
`;

const StyledText = styled.p`
  margin-top: 0.5rem;
  color: var(--grey-900);
`;

const SkillsCard = ({ icon, title, text }) => {
  return (
    <StyledSkillsCard>
      <StyledIcon>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledSkillsCard>
  );
};

export default SkillsCard;
