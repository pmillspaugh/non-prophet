import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';
import ProductDisplay from '../product/ProductDisplay';

// TODO: move to Firestore
const shirtImageCollection = {
  navy: [
    '../../assets/theShirt/navy/shirt-navy-mens-1.png',
    '../../assets/theShirt/navy/shirt-navy-womens-1.png',
    '../../assets/theShirt/navy/shirt-navy-mens-2.png',
    '../../assets/theShirt/navy/shirt-navy-womens-2.png',
    '../../assets/theShirt/navy/shirt-navy-mens-zoomed-1.png',
    '../../assets/theShirt/navy/shirt-navy-womens-zoomed-1.png',
  ],
  black: [
    '../../assets/theShirt/black/shirt-black-mens-1.png',
    '../../assets/theShirt/black/shirt-black-womens-1.png',
    '../../assets/theShirt/black/shirt-black-mens-2.png',
    '../../assets/theShirt/black/shirt-black-womens-2.png',
    '../../assets/theShirt/black/shirt-black-mens-zoomed-1.png',
    '../../assets/theShirt/black/shirt-black-womens-zoomed-1.png',
  ],
  white: [
    '../../assets/theShirt/white/shirt-white-mens-1.png',
    '../../assets/theShirt/white/shirt-white-womens-1.png',
    '../../assets/theShirt/white/shirt-white-mens-2.png',
    '../../assets/theShirt/white/shirt-white-womens-2.png',
    '../../assets/theShirt/white/shirt-white-mens-zoomed-1.png',
    '../../assets/theShirt/white/shirt-white-womens-zoomed-1.png',
  ],
};

// TODO: move to Firestore
const shirtDetails = {
  details: 'Embroidered non-prophet logo. 100% soft, durable cotton. Unisex.',
  sizeAndFit: 'Pre-shrunk. Regular fit.',
  shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
};

const TheShirt = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='The Shirt.' />
        <ProductDisplay
          imageCollection={shirtImageCollection}
          details={shirtDetails}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheShirt;
