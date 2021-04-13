import styled from 'styled-components/macro';
import { COLORS } from '../../constants';
import { ArrowRightCircle } from 'react-feather';

const EJIAnchor = () => {
  return (
    <EJILink target='_blank' href='https://eji.org/'>
      <LearnMore>Learn More </LearnMore>
      <ArrowRightCircle />
    </EJILink>
  );
};

const EJILink = styled.a`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${COLORS.harvestGold};

  &:hover {
    color: ${COLORS.oxfordBlue};
  }
`;

const LearnMore = styled.p`
  margin-top: 4px;
`;

export default EJIAnchor;
