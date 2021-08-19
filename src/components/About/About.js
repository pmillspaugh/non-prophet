import styled from 'styled-components';
import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';
import Spacer from '../Spacer';
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
          <Spacer size='36px' />
          <BodyText>
            All profits are donated to the{' '}
            <ExternalLink href='https://eji.org/' target='_blank'>
              Equal Justice Initiative
            </ExternalLink>
            . The EJI is a nonprofit organization challenging racial and
            economic injustice in the US, with a focus on ending mass
            incarceration and excessive punishment.
          </BodyText>
          <Spacer size='16px' />
          <BodyText>
            The site is a work in progress right now, so you won't be able to
            add items to your cart, sign up, or checkout just yet.
          </BodyText>
          <Spacer size='16px' />
          <BodyText>
            If you have any feedback, let me know on{' '}
            <ExternalLink
              href='https://twitter.com/pete_millspaugh'
              target='_blank'
            >
              Twitter
            </ExternalLink>
            . Thank you for your support!
          </BodyText>
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
  text-align: center;
`;

const NonProphet = styled.span`
  color: ${COLORS.harvestGold};
  font-weight: ${WEIGHTS[600]};
`;

const BodyText = styled.p`
  align-self: flex-start;
  text-align: left;

  @media (min-width: 992px) {
    align-self: revert;
    text-align: revert;
  }
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
