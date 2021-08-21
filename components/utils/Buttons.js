import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../styles/constants';
import { ShoppingCart } from 'react-feather';

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

const FloatingShoppingCart = ({ toggleCartTransform }) => {
  return (
    <FloatingActionButtonShoppingCart
      aria-label='Shopping Cart'
      onClick={toggleCartTransform}
    >
      <ShoppingCart color={COLORS.eerieBlack} />
    </FloatingActionButtonShoppingCart>
  );
};

const FloatingActionButtonShoppingCart = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: none;
  border: none;
  border-radius: 50%;
  padding: 18px 18px 16px 16px;
  background-color: ${COLORS.aliceBlue};
  box-shadow: 0 0 16px hsla(0deg 0% 50% / 0.4);

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.gainsboro};
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { PrimaryButton, FloatingShoppingCart };
