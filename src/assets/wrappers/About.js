import styled from "styled-components";

const Wrapper = styled.section`
  .about-center {
    margin: 2rem auto;
    max-width: 1280px;
  }
  .about-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .about-img {
    width: 100%;
    height: 12rem;
  }

  @media (min-width: 768px) {
    .about-container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
    .about-img{
      align-self: end;
    }
  }

  .about-text {
    color: var(--grey-200);
    margin-top: 8px;
    line-height: 1.6;
  }
`;

export default Wrapper;
