import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ShoppingCart, Menu } from 'react-feather';
import { COLORS } from '../../styles/constants';
import Spacer from '../utils/Spacer';
import Logo from '../utils/Logo';
import yellowLogo from '../../public/images/logo/logo-harvestGold.png';
import blackLogo from '../../public/images/logo/logo-eerieBlack.png';

const Header = ({ toggleMenuTransform, toggleCartTransform }) => {
  // state variable to hold the current logo color, which changes on page scroll
  const [logo, setLogo] = useState(yellowLogo);

  // update logo color (i.e. source) when a user scrolls
  const handleScroll = () => {
    window.scrollY > 68 ? setLogo(blackLogo) : setLogo(yellowLogo);
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
        <Link href='/about' passHref>
          <NavBarLink>About</NavBarLink>
        </Link>
        <Spacer size='12px' />
        <Link href='/the-shirt' passHref>
          <NavBarLink>The Shirt</NavBarLink>
        </Link>
        <Spacer size='12px' />
        <Link href='/' passHref>
          <a>
            <Logo source={logo} />
          </a>
        </Link>
        <Spacer size='12px' />
        <Link href='/the-hoodie' passHref>
          <NavBarLink>The Hoodie</NavBarLink>
        </Link>
        <Spacer size='12px' />
        <Link href='/the-beanie' passHref>
          <NavBarLink>The Beanie</NavBarLink>
        </Link>
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

const NavBarLink = styled.a`
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
