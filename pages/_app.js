import { useState } from 'react';
import styled from 'styled-components';
import { CSSReset, GlobalStyles } from '../styles/globals';
import { COLORS } from '../styles/constants';
import Header from '..components/global/Header';
import Footer from '..components/global/Footer';
import NavSideBar from '..components/global/NavSideBar';
import CartSideBar from '..components/global/CartSideBar';
import { FloatingShoppingCart } from '..components/utils/Buttons';

const App = ({ Component, pageProps }) => {
  // state variables track the status and styling of mobile navigation menu sidebar and shopping cart sidebar
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setcartIsOpen] = useState(false);
  // TODO: when menu/cart are hidden, items should not be reachable by keyboard
  const [menuTransform, setMenuTransform] = useState('translate(-250px, 0)');
  const [cartTransform, setCartTransform] = useState('translate(250px, 0)');
  const [contentFilter, setContentFilter] = useState('none');

  // toggles mobile navigation menu sidebar
  const toggleMenuTransform = (menuIsOpen) => {
    if (cartIsOpen) return;

    if (!menuIsOpen) {
      setMenuIsOpen(true);
      setMenuTransform('translate(0, 0)');
      setContentFilter('blur(4px)');
    } else {
      setMenuIsOpen(false);
      setMenuTransform('translate(-250px, 0)');
      setContentFilter('none');
    }
  };

  // toggles mobile shopping cart sidebar
  const toggleCartTransform = () => {
    if (menuIsOpen) return;

    if (!cartIsOpen) {
      setcartIsOpen(true);
      setCartTransform('translate(0, 0)');
      setContentFilter('blur(4px)');
    } else {
      setcartIsOpen(false);
      setCartTransform('translate(250px, 0)');
      setContentFilter('none');
    }
  };

  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <AppWrapper>
        <NavSideBar
          menuTransform={menuTransform}
          toggleMenuTransform={toggleMenuTransform}
        />
        <CartSideBar
          cartTransform={cartTransform}
          toggleCartTransform={toggleCartTransform}
        />
        <FloatingShoppingCart toggleCartTransform={toggleCartTransform} />
        <PageWrapper contentFilter={contentFilter}>
          <Header
            toggleMenuTransform={() => toggleMenuTransform()}
            toggleCartTransform={() => toggleCartTransform()}
          />
          <Component toggleCartTransform={toggleCartTransform} {...pageProps} />
          <Footer />
        </PageWrapper>
      </AppWrapper>
    </>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

const PageWrapper = styled.div`
  isolation: isolate;
  display: grid;
  grid-template-rows: 68px 1fr 68px;
  background-color: ${COLORS.aliceBlue};
  filter: ${(p) => p.contentFilter};
`;

export default App;
