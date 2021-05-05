import { useState } from 'react';
import styled from 'styled-components/macro';
import Spacer from '../Spacer';
import Carousel from '../product/Carousel';
import Description from '../product/Description';
import ChooseColor from '../product/ChooseColor';
import ChooseSize from '../product/ChooseSize';
import AddToCartButton from '../product/AddToCartButton';
import Details from '../product/Details';

const emptyCart = {
  shirt: {
    Navy: {},
    Black: {},
    White: {},
  },
  hoodie: {
    Navy: {},
    Black: {},
    White: {},
  },
  beanie: {
    Navy: {},
    Black: {},
    White: {},
  },
};

const ProductDisplay = ({
  imageCollection,
  colorChoices,
  sizeChoices,
  product,
  price,
  details,
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

  const handleAddToCartClick = () => {
    // if the user has not selected a size, display message to select size
    if (product !== 'The Beanie.' && selectedSize === '') {
      setSelectedSize('Select a size');
      return;
    }
    // if the user has not selected a size, prompt them to select a size
    if (selectedSize === 'Select a size') return;

    // access shopping cart from local storage, or create an empty cart
    let shoppingCart;
    if (localStorage.getItem('shoppingCart')) {
      shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    } else {
      shoppingCart = emptyCart;
    }
    const productKey = product.toLowerCase().substring(4, product.length - 1);
    // if the user has already added the product of the selected color and size to cart, increment quantity
    if (shoppingCart[productKey][selectedColor][selectedSize]) {
      shoppingCart[productKey][selectedColor][selectedSize]++;
    } else {
      // otherwise, set value to 1
      shoppingCart[productKey][selectedColor][selectedSize] = 1;
    }
    // set the shopping cart in local storage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
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
        <AddToCartButton onAddToCartClick={handleAddToCartClick}>
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
