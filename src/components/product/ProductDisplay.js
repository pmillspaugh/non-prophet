import styled from 'styled-components/macro';
import Carousel from '../product/Carousel';
import Description from '../product/Description';
import ChooseColor from '../product/ChooseColor';
import ChooseSize from '../product/ChooseSize';
import AddToCartButton from '../product/AddToCartButton';
import Details from '../product/Details';

const ProductDisplay = ({ imageCollection }) => {
  return (
    <ProductDisplayWrapper>
      <Carousel imageCollection={imageCollection} />
      <Description />
      <ChooseColor />
      <ChooseSize />
      <AddToCartButton>Add to cart</AddToCartButton>
      <Details />
    </ProductDisplayWrapper>
  );
};

const ProductDisplayWrapper = styled.section`
  min-height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 36px;
`;

export default ProductDisplay;
