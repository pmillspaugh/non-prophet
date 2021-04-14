import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';
import ProductDisplay from '../product/ProductDisplay';

// TODO: move to Firestore
const beanieImageCollection = {
  navy: [
    '../../assets/theBeanie/navy/beanie-navy-flat-1.png',
    '../../assets/theBeanie/navy/beanie-navy-flat-2.png',
    '../../assets/theBeanie/navy/beanie-navy-mens-1.png',
    '../../assets/theBeanie/navy/beanie-navy-womens-1.png',
    '../../assets/theBeanie/navy/beanie-navy-mens-2.png',
    '../../assets/theBeanie/navy/beanie-navy-womens-2.png',
  ],
  black: [
    '../../assets/theBeanie/black/beanie-black-flat-1.png',
    '../../assets/theBeanie/black/beanie-black-flat-2.png',
    '../../assets/theBeanie/black/beanie-black-mens-1.png',
    '../../assets/theBeanie/black/beanie-black-womens-1.png',
    '../../assets/theBeanie/black/beanie-black-mens-2.png',
    '../../assets/theBeanie/black/beanie-black-womens-2.png',
  ],
  white: [
    '../../assets/theBeanie/white/beanie-white-flat-1.png',
    '../../assets/theBeanie/white/beanie-white-flat-2.png',
    '../../assets/theBeanie/white/beanie-white-mens-1.png',
    '../../assets/theBeanie/white/beanie-white-womens-1.png',
    '../../assets/theBeanie/white/beanie-white-mens-2.png',
    '../../assets/theBeanie/white/beanie-white-womens-2.png',
  ],
};

const beanieColorChoices = {
  navy: '../../../assets/theBeanie/navy/beanie-navy-flat-1.png',
  black: '../../../assets/theBeanie/black/beanie-black-flat-1.png',
  white: '../../../assets/theBeanie/white/beanie-white-flat-1.png',
};

const beanieSizeChoices = ['N/A'];

const beanieDetails = {
  details: 'Embroidered non-prophet logo. Soft Turbo acrylic fabric. Unisex.',
  sizeAndFit:
    'One size fits all (even big noggins – just avoid machine washing/drying).',
  shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
};

const TheBeanie = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='The Beanie.' />
        <ProductDisplay
          imageCollection={beanieImageCollection}
          product='The Beanie.'
          price='$25'
          colorChoices={beanieColorChoices}
          sizeChoices={beanieSizeChoices}
          details={beanieDetails}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheBeanie;
