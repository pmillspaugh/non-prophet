import { useState } from 'react';
import styled from 'styled-components/macro';
import Spacer from '../Spacer';
import Carousel from '../product/Carousel';
import Description from '../product/Description';
import ChooseColor from '../product/ChooseColor';
import ChooseSize from '../product/ChooseSize';
import AddToCartButton from '../product/AddToCartButton';
import Details from '../product/Details';

const ProductDisplay = ({
  imageCollection,
  colorChoices,
  sizeChoices,
  product,
  price,
  details,
}) => {
  // state to manage color and size selection
  const [selectedColor, setSelectedColor] = useState('navy');
  const [selectedSize, setSelectedSize] = useState('');

  // toggles image collection for display in Carousel
  const handleColorButtonClick = (buttonColor) => {
    setSelectedColor(buttonColor);
  };

  // toggles size selected
  const handleSizeButtonClick = (sizeOption) => {
    setSelectedSize(sizeOption);
  };

  return (
    <ProductDisplayWrapper>
      <Carousel
        imageCollection={imageCollection}
        selectedColor={selectedColor}
      />
      <Spacer size='16px' />
      <OptionsWrapper>
        <Description product={product} price={price} />
        <Spacer size='16px' />
        <ChooseColor
          colorChoices={colorChoices}
          handleColorButtonClick={handleColorButtonClick}
          selectedColor={selectedColor}
        />
        <Spacer size='16px' />
        <ChooseSize
          product={product}
          sizeChoices={sizeChoices}
          handleSizeButtonClick={handleSizeButtonClick}
          selectedSize={selectedSize}
        />
        <Spacer size='16px' />
        <AddToCartButton>Add to cart.</AddToCartButton>
        <Spacer size='16px' />
        <Details details={details} />
      </OptionsWrapper>
    </ProductDisplayWrapper>
  );
};

const ProductDisplayWrapper = styled.section`
  min-height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 68px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const OptionsWrapper = styled.div`
  width: 100%;
  min-width: 268px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-left: 24px;
  }
  @media (min-width: 1200px) {
    max-width: 268px;
  }
`;

export default ProductDisplay;
