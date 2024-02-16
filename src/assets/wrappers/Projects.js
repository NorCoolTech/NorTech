import styled from "styled-components";

const Wrapper = styled.section`
  .projects-section {
    width: 500px;
    margin: 2rem auto;
    padding: 0 15px;
  }

  .slick-prev::before {
    color: var(--primary-100);
    font-size: 2rem;
  }
  .slick-next::before {
    color: var(--primary-100);
    font-size: 2rem;
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }

 
  @media screen and (min-width: 800px) {
    .projects-section {
      width: 1280px;
    }
  }
`;

export default Wrapper;