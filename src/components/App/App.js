import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components/macro';
import ShoppingCartContext from '../ShoppingCartContext';
import PrimaryContent from './PrimaryContent';
import NavSideBar from './NavSideBar';
import CartSideBar from './CartSideBar';
import { FloatingShoppingCart } from '../Buttons';

const App = () => {
  // state variable to store shopping cart
  const [shoppingCart, setShoppingCart] = useState(
    'initial shopping cart context value'
  );

  // handler for shopping cart items added/removed
  const handleShoppingCartChange = () => {
    setShoppingCart(localStorage.getItem('shoppingCart'));
  };

  // state variables track the status and styling of mobile navigation menu sidebar and shopping cart sidebar
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuTransform, setMenuTransform] = useState('translate(-250px, 0)');
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const [cartTransform, setCartTransform] = useState('translate(250px, 0)');
  const [contentFilter, setContentFilter] = useState('none');

  // toggles mobile navigation menu sidebar
  const toggleMenuTransform = (menuIsOpen) => {
    if (cartIsOpen) {
      return;
    }
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
    if (menuIsOpen) {
      console.log('test');
      return;
    }
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
    <Router>
      <ShoppingCartContext.Provider value={shoppingCart}>
        <AppWrapper>
          <PrimaryContent
            onShoppingCartChange={handleShoppingCartChange}
            contentFilter={contentFilter}
            toggleMenuTransform={toggleMenuTransform}
            toggleCartTransform={toggleCartTransform}
          />
          <NavSideBar
            menuTransform={menuTransform}
            toggleMenuTransform={toggleMenuTransform}
          />
          <FloatingShoppingCart toggleCartTransform={toggleCartTransform} />
          <CartSideBar
            cartTransform={cartTransform}
            toggleCartTransform={toggleCartTransform}
          />
        </AppWrapper>
      </ShoppingCartContext.Provider>
    </Router>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

export default App;
