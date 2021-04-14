import styled from 'styled-components/macro';
import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';
import { COLORS, WEIGHTS } from '../../constants';

const About = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='About.' />
        <AboutSection>
          <h1>
            <NonProphet>non-prophet</NonProphet> is a <em>not-for-profit</em>{' '}
            venture.
          </h1>
          <p>
            All profits are donated to the{' '}
            <ExternalLink href='https://eji.org/'>
              Equal Justice Initiative
            </ExternalLink>
            .
          </p>
          <p>
            The site is a work-in progress right now, so you won't be able to
            add items to your cart, sign up, or checkout just yet.
          </p>
          <p>
            If you have any feedback, let me know on{' '}
            <ExternalLink href='https://twitter.com/pete_millspaugh'>
              Twitter
            </ExternalLink>
            . Thank you for your support!
          </p>
        </AboutSection>
      </Main>
    </MaxWidthWrapper>
  );
};

const AboutSection = styled.section`
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

const NonProphet = styled.span`
  color: ${COLORS.harvestGold};
  font-weight: ${WEIGHTS[600]};
`;

const ExternalLink = styled.a`
  color: inherit;
  font-style: italic;

  &:hover {
    cursor: pointer;
    color: ${COLORS.harvestGold};
    text-decoration: none;
  }
`;

export default About;
