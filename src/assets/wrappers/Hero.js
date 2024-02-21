import styled from "styled-components";

const Wrapper = styled.div`
  .hero-container {
    height: 45%;
    max-width: 1280px;
    margin: 0 auto;
    border-radius: 2rem;
    padding: 1rem 20px;
    box-shadow: var(--shadow-1);
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.85);
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    gap: 1rem;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    color: #4a5568;
    text-transform: capitalize;
    background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-description {
    font-size: 1.05rem;
    text-transform: capitalize;
    color: var(--grey-300);
    font-weight: 400;
    line-height: 1.2;
  }

  .hero-contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hero-social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 2rem;
    color: var(--primary-200);
    
  }

  .hero-social-links svg {
    color: var(--primary-200);
  }

  .hero-social-links svg:hover {
    color: var(--primary-500);
  }

  .hero-image {
    display: none;
  }

  .hero-download,
  .hero-email {
    width: 220px;
    text-align: center;
    border-radius: 20px;
    box-shadow: var(--shadow-3);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .hero-download svg,
  .hero-email svg {
    color: var(--grey-200);
    font-size: 1.35rem;
  }

  .hero-download a,
  .hero-email a {
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--grey-200);
    padding: 0.5rem;
  }

  .hero-download:hover a,
  .hero-email:hover a,
  .hero-download:hover svg,
  .hero-email:hover svg {
    color: var(--color-subtext);
    transition: 0s;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    .hero-image {
      display: block;
      height: 300px;
      width: 200px;
      margin-right: 2rem;
    }

    .hero-social-links {
      display: none;
    }

    .hero-container {
      max-width: 1280px;
      margin: 1rem auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .hero-info {
      align-items: flex-start;
    }
    .hero-title {
      font-size: 5rem;
      align-self: flex-start;
    }
    .hero-contact {
      flex-direction: row;
    }
  }
  @media (min-width: 950px) {
    .hero-image {
      display: block;
      height: 300px;
      width: auto;
      margin-right: 2rem;
    }
  }
`;

export default Wrapper;
