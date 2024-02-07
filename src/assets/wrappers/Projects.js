import styled from "styled-components";

const Wrapper = styled.section`
  .projects-section {
    max-width: 1280px;
    margin: 2rem auto;
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
    background-color: transparent;
  }

  .projects-grid {
    padding-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

export default Wrapper;