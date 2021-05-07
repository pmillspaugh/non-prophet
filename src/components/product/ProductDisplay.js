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
  onShoppingCartChange,
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
    if (product !== 'The Beanie.' && selectedSize === '')
      setSelectedSize('Select a size.');
  };

  const handleAddToCartMouseLeave = () => {
    if (selectedSize === 'Select a size.') setSelectedSize('');
  };

  const handleAddToCartClick = () => {
    // if the product is not The Beanie and the user has not selected a size, return
    if (product !== 'The Beanie.' && selectedSize === 'Select a size.') return;

    // TODO: also need to be able to remove items from cart –> extract local storage update to helper function in utils?
    // access shopping cart from local storage, or create an empty cart
    let shoppingCart;
    if (localStorage.getItem('shoppingCart')) {
      shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    } else {
      shoppingCart = {
        'The Shirt.': {
          Navy: {},
          Black: {},
          White: {},
        },
        'The Hoodie.': {
          Navy: {},
          Black: {},
          White: {},
        },
        'The Beanie.': {
          Navy: {},
          Black: {},
          White: {},
        },
      };
    }
    // if the user has already added the product of the selected color and size to cart, increment quantity
    if (shoppingCart[product][selectedColor][selectedSize]) {
      shoppingCart[product][selectedColor][selectedSize]++;
    } else {
      // otherwise, set value to 1
      shoppingCart[product][selectedColor][selectedSize] = 1;
    }
    // set the shopping cart in local storage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

    // open the shopping cart side bar
    toggleCartTransform();

    // call onShoppingCartChange to update top-level shopping cart state
    onShoppingCartChange();
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
