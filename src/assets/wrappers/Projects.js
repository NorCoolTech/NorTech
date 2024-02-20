import styled from "styled-components";

const Wrapper = styled.section`
  .projects-section {
    max-width: 1280px;
    width: 90%;
    margin: 2rem auto;
    padding: 0 5px;
    height: 100%;
  }

  .slick-prev::before,
  .slick-next::before {
    color: var(--primary-100);
    font-size: 2rem;
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }

  
  @media screen and (max-width: 1000px) {
    .projects-section {
      max-width: 900px;
    }
  }
  
  @media (max-width: 800px) {
    .projects-section {
      width: 60%;
    }
  }
  @media (max-width: 799px) {
    .projects-section {
      width: 85%;
      padding: 0 10px;
    }
  }

`;

export default Wrapper;
