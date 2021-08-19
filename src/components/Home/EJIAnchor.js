import styled from 'styled-components';
import { COLORS } from '../../constants';
import { ArrowRightCircle } from 'react-feather';

const EJIAnchor = () => {
  return (
    <EJILink target='_blank' href='https://eji.org/'>
      <LearnMore>Learn More</LearnMore>
      <ArrowRightCircle />
    </EJILink>
  );
};

const EJILink = styled.a`
  margin-top: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.oxfordBlue};

  &:hover {
    color: ${COLORS.harvestGold};
  }
`;

const LearnMore = styled.p`
  margin-top: 4px;
  margin-right: 8px;
`;

export default EJIAnchor;
