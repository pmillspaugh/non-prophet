import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components/macro';
import PrimaryContent from '../PrimaryContent';
import NavSideBar from '../NavSideBar';
import CartSideBar from '../CartSideBar';

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuTransform, setMenuTransform] = useState('translate(-250px, 0)');
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const [cartTransform, setCartTransform] = useState('translate(250px, 0)');
  const [contentFilter, setContentFilter] = useState('none');

  const toggleMenuTransform = () => {
    setMenuIsOpen(!menuIsOpen);
    if (menuIsOpen) {
      setMenuTransform('translate(0, 0)');
      setContentFilter('blur(4px)');
    } else {
      setMenuTransform('translate(-250px, 0)');
      setContentFilter('none');
    }
  };

  //  ! DRY
  const toggleCartTransform = () => {
    setcartIsOpen(!cartIsOpen);
    if (cartIsOpen) {
      setCartTransform('translate(0, 0)');
      setContentFilter('blur(4px)');
    } else {
      setCartTransform('translate(250px, 0)');
      setContentFilter('none');
    }
  };

  return (
    <Router>
      <AppWrapper>
        <PrimaryContent
          contentFilter={contentFilter}
          toggleMenuTransform={toggleMenuTransform}
          toggleCartTransform={toggleCartTransform}
        />
        <NavSideBar
          menuTransform={menuTransform}
          toggleMenuTransform={toggleMenuTransform}
        />
        <CartSideBar
          cartTransform={cartTransform}
          toggleCartTransform={toggleCartTransform}
        />
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

export default App;
