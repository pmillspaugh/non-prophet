import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ShoppingCart, Menu } from 'react-feather';
import { COLORS } from '../../styles/constants';
import Logo from '../utils/Logo';
import Spacer from '../utils/Spacer';

const Header = ({ toggleMenuTransform, toggleCartTransform }) => {
  // state variable to hold the current logo color, which changes on page scroll
  const [logoSource, setLogoSource] = useState(
    '../../../assets/logo/logo-harvestGold.png'
  );

  // update logo color (i.e. source) when a user scrolls
  const handleScroll = () => {
    window.scrollY > 68
      ? setLogoSource('../../../assets/logo/logo-eerieBlack.png')
      : setLogoSource('../../../assets/logo/logo-harvestGold.png');
  };

  // add listener for a user scroll event when the header component re-renders
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <HeaderWrapper>
      <NavBar>
        <IconWrapper onClick={toggleMenuTransform}>
          <Menu color={COLORS.eerieBlack} />
        </IconWrapper>
        <NavBarLink href='/about' passHref>
          <a>About</a>
        </NavBarLink>
        <Spacer size='12px' />
        <NavBarLink href='/the-shirt' passHref>
          <a>The Shirt</a>
        </NavBarLink>
        <Spacer size='12px' />
        <Link href='/'>
          <a>
            <Logo source={logoSource} />
          </a>
        </Link>
        <Spacer size='12px' />
        <NavBarLink href='/the-hoodie' passHref>
          <a>The Hoodie</a>
        </NavBarLink>
        <Spacer size='12px' />
        <NavBarLink href='/the-beanie' passHref>
          <a>The Beanie</a>
        </NavBarLink>
        <IconWrapper onClick={toggleCartTransform}>
          <ShoppingCart color={COLORS.eerieBlack} />
        </IconWrapper>
      </NavBar>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: ${COLORS.aliceBlue};
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarLink = styled(Link)`
  width: 100px;
  text-align: center;
  display: none;
  text-decoration: none;
  color: ${COLORS.eerieBlack};

  @media (min-width: 768px) {
    & {
      display: inline;
    }
  }
`;

// TODO: update to semantic button element (and verify styling is not broken)
const IconWrapper = styled.div`
  display: flex;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default Header;
