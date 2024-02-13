import styled from "styled-components";

const Wrapper = styled.article`
  .projects-card {
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 1px 6px 8px rgba(0, 0, 0, 1);
    transition: box-shadow 0.3s;
    margin: 1rem 1rem;
    height: 650px;
    padding: 8px;
  }

  .projects-card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .projects-card_image {
    width: 100%;
    height: 400px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .projects-card_content {
    padding: 8px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .projects-card_title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--grey-800);
  }

  .projects-card_text {
    margin-top: 1rem;
    color: var(--grey-950);
    line-height: 1.5;
  }

  .projects-card_links {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .projects-card_link {
    height: 2rem;
    width: 5rem;
    transition: color 0.3s;
  }

  .run {
    color: var(--green);
  }

  .projects-card_box {
    width: 50%;
    border: 1px solid var(--grey-950);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .projects-card_link:hover {
    color: var(--primary-400);
  }

  @media (min-width: 1024px) {
    .projects-card_image {
      width: 100%;
      height: 400px;
      
    }
  }
`;

export default Wrapper;