import styled from 'styled-components';

const Wrapper = styled.nav`
  nav {
    margin-bottom: 1rem;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--primary-500);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .nav-toggle:hover {
    color: var(--primary-700);
    transform: rotate(90deg);
  }

  .logo {
    height: 60px;
  }

  .links a {
    color: var(--grey-200);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }

  .links a:hover {
    background: var(--primary-100);
    color: var(--primary-500);
    padding-left: 1.5rem;
  }

  .links-container {
    overflow: hidden;
    transition: var(--transition);
  }

  .social-icons {
    display: none;
  }

  @media screen and (min-width: 800px) {
    .nav-toggle {
      display: none;
    }
    .nav-header {
      padding: 0;
    }
    .nav-center {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
      gap: 2rem;
      padding: 2rem;
    }
    .links a {
      font-size: 1.5rem;
      padding: 0;
    }
    .links a:hover {
      padding-left: 0;
      background: transparent;
      cursor: pointer;
      position: relative;
    }

    .links a::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2.5px;
    }

    .links a:hover::after {
      background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%);
      z-index: 1;
    }

    .social-icons {
      display: flex;
      gap: 1.5rem;
      font-size: 2rem;
    }
    .social-icons a {
      color: var(--primary-500);
      transition: var(--transition);
    }
    .social-icons a:hover {
      color: var(--primary-300);
    }
  }
`;

export default Wrapper;