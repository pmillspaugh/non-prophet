import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ShoppingCart, Menu } from 'react-feather';
import { COLORS } from '../constants';
import Logo from './Logo';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar>
        <IconWrapper href='/'>
          <Menu color={COLORS.eerieBlack} />
        </IconWrapper>
        <NavBarLink to='/about'>About</NavBarLink>
        <NavBarLink to='/the-shirt'>The Shirt</NavBarLink>
        <Link to='/'>
          <Logo />
        </Link>
        <NavBarLink to='/the-hoodie'>The Hoodie</NavBarLink>
        <NavBarLink to='/the-beanie'>The Beanie</NavBarLink>
        <IconWrapper href='/'>
          <ShoppingCart color={COLORS.eerieBlack} />
        </IconWrapper>
      </NavBar>
    </HeaderWrapper>
  );
};

// TODO: style header on scroll: https://dev.to/caicindy87/change-navbar-style-on-scroll-using-react-and-css-43pc
const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const NavBarLink = styled(NavLink)`
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

const IconWrapper = styled.div`
  display: flex;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-left: auto;
  }

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default Header;
