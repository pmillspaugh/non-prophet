import styled from 'styled-components/macro';
import Logo from './Logo';
import { NavLink, Link } from 'react-router-dom';
import { X } from 'react-feather';
import { COLORS } from '../constants';

const NavSideBar = ({ menuTransform, toggleMenuTransform }) => {
  return (
    <Wrapper menuTransform={menuTransform}>
      <XIcon color={COLORS.aliceBlue} size={36} onClick={toggleMenuTransform} />
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
  transform: ${(p) => p.menuTransform};
  transition: 1s transform;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 250px;
  background-color: ${COLORS.eerieBlack};
`;

const LogoWrapper = styled.div`
  margin-top: 60px;
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

const XIcon = styled(X)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export default NavSideBar;
