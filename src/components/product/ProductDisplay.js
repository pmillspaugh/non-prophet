import { useState } from 'react';
import styled from 'styled-components/macro';
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
  console.log('colorChoices', colorChoices);

  return (
    <ProductDisplayWrapper>
      <Carousel
        imageCollection={imageCollection}
        selectedColor={selectedColor}
      />
      <OptionsWrapper>
        <Description product={product} price={price} />
        <ChooseColor
          colorChoices={colorChoices}
          handleColorButtonClick={handleColorButtonClick}
          selectedColor={selectedColor}
        />
        <ChooseSize
          product={product}
          sizeChoices={sizeChoices}
          handleSizeButtonClick={handleSizeButtonClick}
          selectedSize={selectedSize}
        />
        <AddToCartButton>Add to cart</AddToCartButton>
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
  gap: 16px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 36px;
  }
`;

const OptionsWrapper = styled.div`
  width: 100%;
  min-width: 268px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (min-width: 1200px) {
    max-width: 268px;
  }
`;

export default ProductDisplay;
