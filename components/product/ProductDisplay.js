import { useState } from 'react';
import styled from 'styled-components';
import Spacer from '../utils/Spacer';
import Carousel from './Carousel';
import Description from './Description';
import ChooseColor from './ChooseColor';
import ChooseSize from './ChooseSize';
import AddToCartButton from './AddToCartButton';
import Details from './Details';

const ProductDisplay = ({
  title,
  price,
  details,
  colorChoices,
  sizeChoices,
  imageCollection,
  toggleCartTransform,
}) => {
  // state to manage color and size selection
  const [selectedColor, setSelectedColor] = useState('Navy');
  const [selectedSize, setSelectedSize] = useState('');

  // toggles image collection for display in Carousel
  const handleColorButtonClick = (buttonColor) => {
    setSelectedColor(buttonColor);
  };

  // toggles size selected
  const handleSizeButtonClick = (sizeOption) => {
    setSelectedSize(sizeOption);
  };

  const handleAddToCartMouseEnter = () => {
    if (title !== 'The Beanie.' && selectedSize === '')
      setSelectedSize('Select a size.');
  };

  const handleAddToCartMouseLeave = () => {
    if (selectedSize === 'Select a size.') setSelectedSize('');
  };

  const handleAddToCartClick = () => {
    // open the shopping cart side bar
    toggleCartTransform();
  };

  return (
    <ProductDisplayWrapper>
      <Carousel
        imageCollection={imageCollection}
        selectedColor={selectedColor}
      />
      <Spacer size='16px' />
      <OptionsWrapper>
        <Description title={title} price={price} />
        <Spacer size='16px' />
        <ChooseColor
          colorChoices={colorChoices}
          handleColorButtonClick={handleColorButtonClick}
          selectedColor={selectedColor}
        />
        <Spacer size='16px' />
        <ChooseSize
          title={title}
          sizeChoices={sizeChoices}
          handleSizeButtonClick={handleSizeButtonClick}
          selectedSize={selectedSize}
        />
        <Spacer size='16px' />
        <AddToCartButton
          selectedSize={selectedSize}
          onAddToCartMouseEnter={handleAddToCartMouseEnter}
          onAddToCartMouseLeave={handleAddToCartMouseLeave}
          onAddToCartClick={handleAddToCartClick}
        >
          Add to cart.
        </AddToCartButton>
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
