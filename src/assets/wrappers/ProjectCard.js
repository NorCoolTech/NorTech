import styled from "styled-components";

const Wrapper = styled.article`
  .projects-card {
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 1px 6px 8px rgba(0, 0, 0, 1);
    transition: box-shadow 0.3s;
    margin: 1rem auto;
    height: 700px;
    width: 85%;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .projects-card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .projects-card_image {
    width: 100%;
    height: 0;
    padding-top: 56%;
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
    height: 80%;
    padding: 0.75rem;
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
    width: 2rem;
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
    gap: 0.5rem;
  }

  .projects-card_box p {
    font-size: 1rem;
    font-weight: 600;
  }

  .projects-card_link:hover {
    color: var(--primary-400);
  }

  @media (max-width: 700px) {
    .projects-card {
      height: 500px;
    }
    .projects-card_content {
      height: 65%;
      font-size: 0.9rem;
    }
    .projects-card_link {
      height: 1.35rem;
      width: 1.35rem;
    }
  }
  @media (max-width: 600px) {
    .projects-card {
      height: 400px;
    }
    .projects-card_content {
      height: 65%;
      font-size: 0.7rem;
    }
    .projects-card_link {
      height: 1rem;
      width: 1rem;
    }
    
  }
`;

export default Wrapper;
