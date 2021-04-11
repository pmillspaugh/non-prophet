import styled from 'styled-components/macro';

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

/* 
TODO: each section needs to fill the viewport and expand as needed...Grid?
*/
const MainWrapper = styled.main`
  width: 100%;
`;

export default Main;
