import styled from 'styled-components/macro';
import { COLORS, WEIGHTS } from '../constants';

const Button = ({ children, type }) => {
  return <PrimaryButton type={type}>{children}</PrimaryButton>;
};

const PrimaryButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  background-color: ${COLORS.oxfordBlue};
  color: ${COLORS.aliceBlue};
  font-weight: ${WEIGHTS[700]};

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.harvestGold};
    color: ${COLORS.oxfordBlue};
  }
`;

export default Button;
