import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import ProductDisplay from '../product/ProductDisplay';

// TODO: move to Firestore
const beanieImageCollection = {
  Navy: [
    '../../assets/theBeanie/navy/beanie-navy-flat-1.png',
    '../../assets/theBeanie/navy/beanie-navy-flat-2.png',
    '../../assets/theBeanie/navy/beanie-navy-mens-1.png',
    '../../assets/theBeanie/navy/beanie-navy-womens-1.png',
    '../../assets/theBeanie/navy/beanie-navy-mens-2.png',
    '../../assets/theBeanie/navy/beanie-navy-womens-2.png',
  ],
  Black: [
    '../../assets/theBeanie/black/beanie-black-flat-1.png',
    '../../assets/theBeanie/black/beanie-black-flat-2.png',
    '../../assets/theBeanie/black/beanie-black-mens-1.png',
    '../../assets/theBeanie/black/beanie-black-womens-1.png',
    '../../assets/theBeanie/black/beanie-black-mens-2.png',
    '../../assets/theBeanie/black/beanie-black-womens-2.png',
  ],
  White: [
    '../../assets/theBeanie/white/beanie-white-flat-1.png',
    '../../assets/theBeanie/white/beanie-white-flat-2.png',
    '../../assets/theBeanie/white/beanie-white-mens-1.png',
    '../../assets/theBeanie/white/beanie-white-womens-1.png',
    '../../assets/theBeanie/white/beanie-white-mens-2.png',
    '../../assets/theBeanie/white/beanie-white-womens-2.png',
  ],
};

const beanieColorChoices = {
  Navy: '../../../assets/theBeanie/navy/beanie-navy-flat-1.png',
  Black: '../../../assets/theBeanie/black/beanie-black-flat-1.png',
  White: '../../../assets/theBeanie/white/beanie-white-flat-1.png',
};

const beanieSizeChoices = ['N/A'];

const beanieDetails = {
  details: 'Embroidered non-prophet logo. Soft Turbo acrylic fabric. Unisex.',
  sizeAndFit:
    'One size fits all (even big noggins – just avoid machine washing/drying).',
  shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
};

const TheBeanie = ({ onShoppingCartChange, toggleCartTransform }) => {
  return (
    <MaxWidthWrapper>
      <Main>
        <ProductDisplay
          imageCollection={beanieImageCollection}
          product='The Beanie.'
          price='$25'
          colorChoices={beanieColorChoices}
          sizeChoices={beanieSizeChoices}
          details={beanieDetails}
          onShoppingCartChange={onShoppingCartChange}
          toggleCartTransform={toggleCartTransform}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheBeanie;
