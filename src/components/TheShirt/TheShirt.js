import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import ProductDisplay from '../product/ProductDisplay';

// TODO: move to Firestore
const shirtImageCollection = {
  Navy: [
    '../../assets/theShirt/navy/shirt-navy-mens-1.png',
    '../../assets/theShirt/navy/shirt-navy-womens-1.png',
    '../../assets/theShirt/navy/shirt-navy-mens-2.png',
    '../../assets/theShirt/navy/shirt-navy-womens-2.png',
    '../../assets/theShirt/navy/shirt-navy-mens-zoomed-1.png',
    '../../assets/theShirt/navy/shirt-navy-womens-zoomed-1.png',
  ],
  Black: [
    '../../assets/theShirt/black/shirt-black-mens-1.png',
    '../../assets/theShirt/black/shirt-black-womens-1.png',
    '../../assets/theShirt/black/shirt-black-mens-2.png',
    '../../assets/theShirt/black/shirt-black-womens-2.png',
    '../../assets/theShirt/black/shirt-black-mens-zoomed-1.png',
    '../../assets/theShirt/black/shirt-black-womens-zoomed-1.png',
  ],
  White: [
    '../../assets/theShirt/white/shirt-white-mens-1.png',
    '../../assets/theShirt/white/shirt-white-womens-1.png',
    '../../assets/theShirt/white/shirt-white-mens-2.png',
    '../../assets/theShirt/white/shirt-white-womens-2.png',
    '../../assets/theShirt/white/shirt-white-mens-zoomed-1.png',
    '../../assets/theShirt/white/shirt-white-womens-zoomed-1.png',
  ],
};

const shirtColorChoices = {
  Navy: '../../../assets/theShirt/navy/shirt-navy-flat-1.png',
  Black: '../../../assets/theShirt/black/shirt-black-flat-1.png',
  White: '../../../assets/theShirt/white/shirt-white-flat-1.png',
};

const shirtSizeChoices = ['S', 'M', 'L', 'XL', 'XXL'];

const shirtDetails = {
  details: 'Embroidered non-prophet logo. 100% soft, durable cotton. Unisex.',
  sizeAndFit: 'Pre-shrunk. Regular fit.',
  shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
};

const TheShirt = ({ onShoppingCartChange, toggleCartTransform }) => {
  return (
    <MaxWidthWrapper>
      <Main>
        <ProductDisplay
          imageCollection={shirtImageCollection}
          product='The Shirt.'
          price='$25'
          colorChoices={shirtColorChoices}
          sizeChoices={shirtSizeChoices}
          details={shirtDetails}
          onShoppingCartChange={onShoppingCartChange}
          toggleCartTransform={toggleCartTransform}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheShirt;
