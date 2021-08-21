import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';
import { COLORS } from '../../styles/constants';

const Landing = ({ message }) => {
  const [chevronIsDisplayed, setChevronIsDisplayed] = useState(
    window.scrollY === 0
  );
  const [landingMessage, setLandingMessage] = useState('');

  // display message one character at a time to create typing effect
  useEffect(() => {
    const currentLength = landingMessage.length;
    setTimeout(
      () => setLandingMessage(message.substring(0, currentLength + 1)),
      75
    );
  });

  // listen for scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // hide chevron on scroll
  const handleScroll = () => {
    window.scrollY > 36
      ? setChevronIsDisplayed(false)
      : setChevronIsDisplayed(true);
  };

  // scroll down one page on chevron click
  const handleChevronClick = () => {
    !/The/.test(message)
      ? window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      : window.scrollTo({ top: window.innerHeight - 136, behavior: 'smooth' });
  };

  return (
    <LandingWrapper>
      <h1>{landingMessage}</h1>
      <FloatingChevronDown
        display={chevronIsDisplayed ? 'block' : 'none'}
        size={36}
        onClick={handleChevronClick}
      />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.section`
  position: relative;
  height: calc(100vh - 68px);
  padding-bottom: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FloatingChevronDown = styled(ChevronDown)`
  display: ${(p) => p.display};
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
      color: ${COLORS.eerieBlack};
    }
    50% {
      transform: translateY(-16px);
      color: ${COLORS.harvestGold};
    }
    100% {
      transform: translateY(0px);
      color: ${COLORS.eerieBlack};
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Landing;
