import styled from 'styled-components/macro';

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

const SectionWrapper = styled.section`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Section;
