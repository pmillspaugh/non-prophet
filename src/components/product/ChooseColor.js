import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const ChooseColor = () => {
  return (
    <Wrapper>
      <h4>Color: </h4>
      <ProductColorButton>
        <img src='../../assets/theShirt/navy/shirt-navy-flat-1.png' alt='' />
      </ProductColorButton>
      <ProductColorButton>
        <img src='../../assets/theShirt/black/shirt-black-flat-1.png' alt='' />
      </ProductColorButton>
      <ProductColorButton>
        <img src='../../assets/theShirt/white/shirt-white-flat-1.png' alt='' />
      </ProductColorButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ProductColorButton = styled.button`
  width: 72px;
  height: 72px;
  margin-right: 12px;
  border: 1px solid ${COLORS.eerieBlack};
  border-radius: 3px;
  background: ${COLORS.gainsboro};
`;

export default ChooseColor;
