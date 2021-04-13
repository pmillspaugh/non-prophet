import styled from 'styled-components/macro';

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

const MainWrapper = styled.main`
  width: 100%;
`;

export default Main;
