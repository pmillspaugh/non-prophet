import styled from 'styled-components';
import ScrollToTop from './ScrollToTop';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from '../About/About';
import Home from '../Home/Home';
import TheProduct from '../product/TheProduct';
import { COLORS } from '../../constants';

// The Shirt product info
const shirtInfo = {
  shirtDetails: {
    details: 'Embroidered non-prophet logo. 100% soft, durable cotton. Unisex.',
    sizeAndFit: 'Pre-shrunk. Regular fit.',
    shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
  },
  shirtColorChoices: {
    Navy: '../../../assets/theShirt/navy/shirt-navy-flat-1.png',
    Black: '../../../assets/theShirt/black/shirt-black-flat-1.png',
    White: '../../../assets/theShirt/white/shirt-white-flat-1.png',
  },
  shirtSizeChoices: ['S', 'M', 'L', 'XL', 'XXL'],
  shirtImageCollection: {
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
};
// The Hoodie product info
const hoodieInfo = {
  hoodieImageCollection: {
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
  hoodieColorChoices: {
    Navy: '../../../assets/theHoodie/navy/hoodie-navy-flat-1.png',
    Black: '../../../assets/theHoodie/black/hoodie-black-flat-1.png',
    White: '../../../assets/theHoodie/white/hoodie-white-flat-1.png',
  },
  hoodieSizeChoices: ['S', 'M', 'L', 'XL', 'XXL'],
  hoodieDetails: {
    details:
      'Embroidered non-prophet logo. 65% cotton / 35% polyester. Unisex.',
    sizeAndFit: 'Regular fit.',
    shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
  },
};
// The Beanie product info
const beanieInfo = {
  beanieImageCollection: {
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
  beanieColorChoices: {
    Navy: '../../../assets/theBeanie/navy/beanie-navy-flat-1.png',
    Black: '../../../assets/theBeanie/black/beanie-black-flat-1.png',
    White: '../../../assets/theBeanie/white/beanie-white-flat-1.png',
  },
  beanieSizeChoices: ['N/A'],
  beanieDetails: {
    details: 'Embroidered non-prophet logo. Soft Turbo acrylic fabric. Unisex.',
    sizeAndFit:
      'One size fits all (even big noggins – just avoid machine washing/drying).',
    shipping: 'Printed & shipped upon order. Should take 1-2 weeks to arrive.',
  },
};

const PrimaryContent = ({
  toggleMenuTransform,
  toggleCartTransform,
  contentFilter,
}) => {
  return (
    <Wrapper contentFilter={contentFilter}>
      <Header
        toggleMenuTransform={() => toggleMenuTransform()}
        toggleCartTransform={() => toggleCartTransform()}
      />
      <ScrollToTop />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/the-shirt'>
          <TheProduct
            product='The Shirt.'
            price='$25'
            details={shirtInfo.shirtDetails}
            colorChoices={shirtInfo.shirtColorChoices}
            sizeChoices={shirtInfo.shirtSizeChoices}
            imageCollection={shirtInfo.shirtImageCollection}
            toggleCartTransform={toggleCartTransform}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/the-hoodie'>
          <TheProduct
            product='The Hoodie.'
            price='$40'
            details={hoodieInfo.hoodieDetails}
            colorChoices={hoodieInfo.hoodieColorChoices}
            sizeChoices={hoodieInfo.hoodieSizeChoices}
            imageCollection={hoodieInfo.hoodieImageCollection}
            toggleCartTransform={toggleCartTransform}
          />
        </Route>
        <Route path='/the-beanie'>
          <TheProduct
            product='The Beanie.'
            price='$25'
            details={beanieInfo.beanieDetails}
            colorChoices={beanieInfo.beanieColorChoices}
            sizeChoices={beanieInfo.beanieSizeChoices}
            imageCollection={beanieInfo.beanieImageCollection}
            toggleCartTransform={toggleCartTransform}
          />
        </Route>
        {/* Any invalid routes should render homepage */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  isolation: isolate;
  display: grid;
  grid-template-rows: 68px 1fr 68px;
  background-color: ${COLORS.aliceBlue};
  filter: ${(p) => p.contentFilter};
`;

export default PrimaryContent;
