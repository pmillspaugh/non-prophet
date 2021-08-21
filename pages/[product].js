import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MaxWidthWrapper from '../components/layout/MaxWidthWrapper';
import ProductDisplay from '../components/product/ProductDisplay';
import IMAGES from '../components/utils/images';

// fetch data at build time for each statically generated product page
export async function getStaticProps(context) {
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
        Navy: IMAGES.shirt.navy.shirtNavy1,
        Black: IMAGES.shirt.black.shirtBlack1,
        White: IMAGES.shirt.white.shirtWhite1,
      },
      sizeChoices: ['S', 'M', 'L', 'XL', 'XXL'],
      imageCollection: {
        Navy: [
          IMAGES.shirt.navy.shirtNavy2,
          IMAGES.shirt.navy.shirtNavy7,
          IMAGES.shirt.navy.shirtNavy3,
          IMAGES.shirt.navy.shirtNavy8,
          IMAGES.shirt.navy.shirtNavy5,
          IMAGES.shirt.navy.shirtNavy10,
        ],
        Black: [
          IMAGES.shirt.black.shirtBlack2,
          IMAGES.shirt.black.shirtBlack7,
          IMAGES.shirt.black.shirtBlack3,
          IMAGES.shirt.black.shirtBlack8,
          IMAGES.shirt.black.shirtBlack5,
          IMAGES.shirt.black.shirtBlack10,
        ],
        White: [
          IMAGES.shirt.white.shirtWhite2,
          IMAGES.shirt.white.shirtWhite7,
          IMAGES.shirt.white.shirtWhite3,
          IMAGES.shirt.white.shirtWhite8,
          IMAGES.shirt.white.shirtWhite5,
          IMAGES.shirt.white.shirtWhite10,
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
        Navy: IMAGES.hoodie.navy.hoodieNavy1,
        Black: IMAGES.hoodie.black.hoodieBlack1,
        White: IMAGES.hoodie.white.hoodieWhite1,
      },
      sizeChoices: ['S', 'M', 'L', 'XL', 'XXL'],
      imageCollection: {
        Navy: [
          IMAGES.hoodie.navy.hoodieNavy4,
          IMAGES.hoodie.navy.hoodieNavy2,
          IMAGES.hoodie.navy.hoodieNavy5,
          IMAGES.hoodie.navy.hoodieNavy6,
          IMAGES.hoodie.navy.hoodieNavy7,
        ],
        Black: [
          IMAGES.hoodie.black.hoodieBlack4,
          IMAGES.hoodie.black.hoodieBlack2,
          IMAGES.hoodie.black.hoodieBlack5,
          IMAGES.hoodie.black.hoodieBlack6,
          IMAGES.hoodie.black.hoodieBlack7,
        ],
        White: [
          IMAGES.hoodie.white.hoodieWhite4,
          IMAGES.hoodie.white.hoodieWhite2,
          IMAGES.hoodie.white.hoodieWhite5,
          IMAGES.hoodie.white.hoodieWhite6,
          IMAGES.hoodie.white.hoodieWhite7,
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
        Navy: IMAGES.beanie.navy.beanieNavy1,
        Black: IMAGES.beanie.black.beanieBlack1,
        White: IMAGES.beanie.white.beanieWhite1,
      },
      sizeChoices: ['N/A'],
      imageCollection: {
        Navy: [
          IMAGES.beanie.navy.beanieNavy1,
          IMAGES.beanie.navy.beanieNavy2,
          IMAGES.beanie.navy.beanieNavy3,
          IMAGES.beanie.navy.beanieNavy5,
          IMAGES.beanie.navy.beanieNavy4,
          IMAGES.beanie.navy.beanieNavy6,
        ],
        Black: [
          IMAGES.beanie.black.beanieBlack1,
          IMAGES.beanie.black.beanieBlack2,
          IMAGES.beanie.black.beanieBlack3,
          IMAGES.beanie.black.beanieBlack5,
          IMAGES.beanie.black.beanieBlack4,
          IMAGES.beanie.black.beanieBlack6,
        ],
        White: [
          IMAGES.beanie.white.beanieWhite1,
          IMAGES.beanie.white.beanieWhite2,
          IMAGES.beanie.white.beanieWhite3,
          IMAGES.beanie.white.beanieWhite5,
          IMAGES.beanie.white.beanieWhite4,
          IMAGES.beanie.white.beanieWhite6,
        ],
      },
    },
  };

  return {
    props: { catalog },
  };
}

// predefine dynamic route paths at build time for statically generated pages
export async function getStaticPaths() {
  return {
    paths: [
      { params: { product: 'the-shirt' } },
      { params: { product: 'the-hoodie' } },
      { params: { product: 'the-beanie' } },
    ],
    fallback: false,
  };
}

const Product = ({ catalog, toggleCartTransform }) => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <>
      <Head>
        <title>non-prophet | {catalog[product].title}</title>
        <meta
          name='description'
          content={`Shop ${catalog[product].title} at non-prophet. All profit donated to the Equal Justice Initiative.`}
        />
      </Head>
      <MaxWidthWrapper>
        <Main>
          <ProductDisplay
            title={catalog[product].title}
            price={catalog[product].price}
            details={catalog[product].details}
            colorChoices={catalog[product].colorChoices}
            sizeChoices={catalog[product].sizeChoices}
            imageCollection={catalog[product].imageCollection}
            toggleCartTransform={toggleCartTransform}
          />
        </Main>
      </MaxWidthWrapper>
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;

export default Product;
