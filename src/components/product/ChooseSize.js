import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const ChooseSize = () => {
  return (
    <div>
      <h4>Size: </h4>
      <ProductSizeButton>S</ProductSizeButton>
      <ProductSizeButton>M</ProductSizeButton>
      <ProductSizeButton>L</ProductSizeButton>
      <ProductSizeButton>XL</ProductSizeButton>
      <ProductSizeButton>XXL</ProductSizeButton>
    </div>
  );
};

const ProductSizeButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 12px;
  background: ${COLORS.gainsboro};
  border: 1px solid ${COLORS.eerieBlack};
  border-radius: 3px;
`;

export default ChooseSize;
