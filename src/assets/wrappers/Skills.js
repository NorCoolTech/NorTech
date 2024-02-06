import styled from "styled-components";

const Wrapper = styled.section`
  .skills-center {
    max-width: 1280px;
    margin: 3rem auto;
  }
  .skills-container {
    margin-top: 1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  @media (min-width: 800px) {
    .skills-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;


export default Wrapper;