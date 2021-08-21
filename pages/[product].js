import styled from 'styled-components';
import { useRouter } from 'next/router';
import MaxWidthWrapper from '../components/layout/MaxWidthWrapper';
import ProductDisplay from '../components/product/ProductDisplay';

const catalog = {
  'the-shirt': {
    title: 'The Shirt.',
    price: '$25',
    details: {
      details:
        'Embroidered non-prophet logo. 100% soft, durable cotton. Unisex.',
      sizeAndFit: 'Pre-shrunk. Regular fit.',
      shipping:
        'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
    },
    colorChoices: {
      Navy: '../../../assets/theShirt/navy/shirt-navy-flat-1.png',
      Black: '../../../assets/theShirt/black/shirt-black-flat-1.png',
      White: '../../../assets/theShirt/white/shirt-white-flat-1.png',
    },
    sizeChoices: ['S', 'M', 'L', 'XL', 'XXL'],
    imageCollection: {
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
    },
  },
  'the-hoodie': {
    title: 'The Hoodie.',
    price: '$40',
    details: {
      details:
        'Embroidered non-prophet logo. 65% cotton / 35% polyester. Unisex.',
      sizeAndFit: 'Regular fit.',
      shipping:
        'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
    },
    colorChoices: {
      Navy: '../../../assets/theHoodie/navy/hoodie-navy-flat-1.png',
      Black: '../../../assets/theHoodie/black/hoodie-black-flat-1.png',
      White: '../../../assets/theHoodie/white/hoodie-white-flat-1.png',
    },
    sizeChoices: ['S', 'M', 'L', 'XL', 'XXL'],
    imageCollection: {
      Navy: [
        '../../assets/theHoodie/navy/hoodie-navy-womens-1.png',
        '../../assets/theHoodie/navy/hoodie-navy-mens-1.png',
        '../../assets/theHoodie/navy/hoodie-navy-womens-2.png',
        '../../assets/theHoodie/navy/hoodie-navy-mens-zoomed-1.png',
        '../../assets/theHoodie/navy/hoodie-navy-womens-zoomed-1.png',
        '../../assets/theHoodie/navy/hoodie-navy-womens-zoomed-2.png',
      ],
      Black: [
        '../../assets/theHoodie/black/hoodie-black-womens-1.png',
        '../../assets/theHoodie/black/hoodie-black-mens-1.png',
        '../../assets/theHoodie/black/hoodie-black-womens-2.png',
        '../../assets/theHoodie/black/hoodie-black-mens-zoomed-1.png',
        '../../assets/theHoodie/black/hoodie-black-womens-zoomed-1.png',
        '../../assets/theHoodie/black/hoodie-black-womens-zoomed-2.png',
      ],
      White: [
        '../../assets/theHoodie/white/hoodie-white-womens-1.png',
        '../../assets/theHoodie/white/hoodie-white-mens-1.png',
        '../../assets/theHoodie/white/hoodie-white-womens-2.png',
        '../../assets/theHoodie/white/hoodie-white-mens-zoomed-1.png',
        '../../assets/theHoodie/white/hoodie-white-womens-zoomed-1.png',
        '../../assets/theHoodie/white/hoodie-white-womens-zoomed-2.png',
      ],
    },
  },
  'the-beanie': {
    title: 'The Beanie.',
    price: '$25',
    details: {
      details:
        'Embroidered non-prophet logo. Soft Turbo acrylic fabric. Unisex.',
      sizeAndFit:
        'One size fits all (even big noggins – just avoid machine washing/drying).',
      shipping:
        'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
    },
    colorChoices: {
      Navy: '../../../assets/theBeanie/navy/beanie-navy-flat-1.png',
      Black: '../../../assets/theBeanie/black/beanie-black-flat-1.png',
      White: '../../../assets/theBeanie/white/beanie-white-flat-1.png',
    },
    sizeChoices: ['N/A'],
    imageCollection: {
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
    },
  },
};

const Product = ({ toggleCartTransform }) => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <MaxWidthWrapper>
      <Main>
        <ProductDisplay
          title={catalog[product][title]}
          price={catalog[product][price]}
          details={catalog[product][details]}
          colorChoices={catalog[product][colorChoices]}
          sizeChoices={catalog[product][sizeChoices]}
          imageCollection={catalog[product][imageCollection]}
          toggleCartTransform={toggleCartTransform}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

const Main = styled.main`
  width: 100%;
`;

export default Product;
