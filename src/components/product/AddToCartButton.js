import styled from 'styled-components';
import { PrimaryButton } from '../Buttons';
import { COLORS } from '../../constants';

const AddToCartButton = ({
  selectedSize,
  onAddToCartMouseEnter,
  onAddToCartMouseLeave,
  onAddToCartClick,
  children,
}) => {
  return (
    <AddToCart
      selectedSize={selectedSize}
      onMouseEnter={onAddToCartMouseEnter}
      onMouseLeave={onAddToCartMouseLeave}
      onClick={onAddToCartClick}
    >
      {children}
    </AddToCart>
  );
};

const AddToCart = styled(PrimaryButton)`
  width: 100%;
  margin: 12px 0;

  &:hover {
    background-color: ${(p) =>
      p.selectedSize === 'Select a size.'
        ? COLORS.oxfordBlue
        : COLORS.harvestGold};
    color: ${(p) =>
      p.selectedSize === 'Select a size.'
        ? COLORS.aliceBlue
        : COLORS.eerieBlack};
    cursor: ${(p) =>
      p.selectedSize === 'Select a size.' ? 'not-allowed' : 'pointer'};
  }

  &:focus {
    outline: none;
  }
`;

export default AddToCartButton;
