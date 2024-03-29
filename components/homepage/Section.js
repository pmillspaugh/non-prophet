import styled from 'styled-components';

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Section;
