import styled from 'styled-components/macro';
import { ChevronDown } from 'react-feather';

const Landing = ({ message }) => {
  return (
    <LandingWrapper>
      <h1>{message}</h1>
      <FloatingChevronDown size={36} />
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
