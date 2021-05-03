import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import ProductDisplay from '../product/ProductDisplay';

// TODO: move to Firestore
const hoodieImageCollection = {
  navy: [
    '../../assets/theHoodie/navy/hoodie-navy-womens-1.png',
    '../../assets/theHoodie/navy/hoodie-navy-mens-1.png',
    '../../assets/theHoodie/navy/hoodie-navy-womens-2.png',
    '../../assets/theHoodie/navy/hoodie-navy-mens-zoomed-1.png',
    '../../assets/theHoodie/navy/hoodie-navy-womens-zoomed-1.png',
    '../../assets/theHoodie/navy/hoodie-navy-womens-zoomed-2.png',
  ],
  black: [
    '../../assets/theHoodie/black/hoodie-black-womens-1.png',
    '../../assets/theHoodie/black/hoodie-black-mens-1.png',
    '../../assets/theHoodie/black/hoodie-black-womens-2.png',
    '../../assets/theHoodie/black/hoodie-black-mens-zoomed-1.png',
    '../../assets/theHoodie/black/hoodie-black-womens-zoomed-1.png',
    '../../assets/theHoodie/black/hoodie-black-womens-zoomed-2.png',
  ],
  white: [
    '../../assets/theHoodie/white/hoodie-white-womens-1.png',
    '../../assets/theHoodie/white/hoodie-white-mens-1.png',
    '../../assets/theHoodie/white/hoodie-white-womens-2.png',
    '../../assets/theHoodie/white/hoodie-white-mens-zoomed-1.png',
    '../../assets/theHoodie/white/hoodie-white-womens-zoomed-1.png',
    '../../assets/theHoodie/white/hoodie-white-womens-zoomed-2.png',
  ],
};

const hoodieColorChoices = {
  navy: '../../../assets/theHoodie/navy/hoodie-navy-flat-1.png',
  black: '../../../assets/theHoodie/black/hoodie-black-flat-1.png',
  white: '../../../assets/theHoodie/white/hoodie-white-flat-1.png',
};

const hoodieSizeChoices = ['S', 'M', 'L', 'XL', 'XXL'];

const hoodieDetails = {
  details: 'Embroidered non-prophet logo. 65% cotton / 35% polyester. Unisex.',
  sizeAndFit: 'Regular fit.',
  shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
};

const TheHoodie = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <ProductDisplay
          imageCollection={hoodieImageCollection}
          product='The Hoodie.'
          price='$40'
          colorChoices={hoodieColorChoices}
          sizeChoices={hoodieSizeChoices}
          details={hoodieDetails}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheHoodie;
