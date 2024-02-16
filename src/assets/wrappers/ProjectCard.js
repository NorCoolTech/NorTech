import styled from "styled-components";

const Wrapper = styled.article`
  .projects-card {
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 1px 6px 8px rgba(0, 0, 0, 1);
    transition: box-shadow 0.3s;
    margin: 1rem 1rem;
    height: 600px;
    padding: 8px;
  }

  .projects-card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .projects-card_image {
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    position: relative;
  }

  .projects-card_image img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  .projects-card_image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(139, 92, 246, 0.1n0);
    
  }

  .projects-card_content {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    box-shadow: 0 8px 5px rgba(139, 92, 246, 0.7);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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
    justify-content: center;
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
    width: 35%;
    border: 1px solid var(--grey-700);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .projects-card_link:hover {
    color: var(--primary-400);
  }

  @media (min-width: 768px) {
    
  }
`;

export default Wrapper;
