import styled from "styled-components";

const Wrapper = styled.div`
  .hero-container {
    height: 350px;
    border-radius: 2rem;
    box-shadow: var(--shadow-1);
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.35);
  }

  .align-element {
    display: flex;
    align-items: center;
  }

  .grid {
    display: grid;
  }

  .two-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .items-center {
    align-items: center;
  }

  .gap-8 {
    gap: 2rem;
  }

  .hero-title {
    font-size: 5rem;
    font-weight: bold;
    letter-spacing: 0.05em;
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
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-links a {
    font-size: 1.75rem;
    color: var(--primary-200);
    transition: var(--transition);
  }

  .social-links a:hover {
    color: var(--primary-300);
  }

  .hero-image {
    display: none;
  }
  .hero-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  .hero-download,
  .hero-email {
    width: 220px;
    text-align: center;
    border-radius: 20px;
    box-shadow: var(--shadow-3);
  }

  .hero-download span,
  .hero-email span {
    font-size: 1.25rem;
    font-weight: 300;
    color: #f49867;
    /* background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  @media (min-width: 800px) {
    .hero-image {
      display: block;
      height: 300px;
      width: auto;
      margin-right: 2rem;
    }
    .hero-container {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .hero-info {
      align-items: flex-start;
    }
  }
`;

export default Wrapper;
