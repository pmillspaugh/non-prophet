// TODO: move to a portal or isolate to create new stacking context?

import styled from 'styled-components/macro';
import Logo from './Logo';
import { NavLink, Link } from 'react-router-dom';
import { COLORS } from '../constants';

const NavSideBar = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <LogoWrapper>
          <Logo source='../../../assets/logo/logo-aliceBlue.png' />
        </LogoWrapper>
      </Link>
      <NavList>
        <NavSideBarLink to='/about'>About</NavSideBarLink>
        <NavSideBarLink to='/the-shirt'>The Shirt</NavSideBarLink>
        <NavSideBarLink to='/the-hoodie'>The Hoodie</NavSideBarLink>
        <NavSideBarLink to='/the-beanie'>The Beanie</NavSideBarLink>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none; // TODO: toggle display on click
  position: absolute;
  z-index: 2; // TODO: move to portal or isolate to avoid z-index wars
  height: 100vh;
  width: 250px;
  background-color: ${COLORS.eerieBlack};
`;

const LogoWrapper = styled.div`
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const NavSideBarLink = styled(NavLink)`
  color: ${COLORS.aliceBlue};
  text-decoration: none;
`;

export default NavSideBar;
