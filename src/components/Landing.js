import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { ChevronDown } from 'react-feather';

const Landing = ({ message }) => {
  const [chevronIsDisplayed, setChevronIsDisplayed] = useState(true);

  const handleScroll = () => {
    window.scrollY > 36
      ? setChevronIsDisplayed(false)
      : setChevronIsDisplayed(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LandingWrapper>
      <h1>{message}</h1>
      <FloatingChevronDown
        display={chevronIsDisplayed ? 'block' : 'none'}
        size={36}
      />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.section`
  position: relative;
  height: calc(100vh - 136px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// TODO: remove chevron on scroll: https://dev.to/caicindy87/change-navbar-style-on-scroll-using-react-and-css-43pc
const FloatingChevronDown = styled(ChevronDown)`
  display: ${(p) => p.display};
  position: absolute;
  bottom: -58px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Landing;