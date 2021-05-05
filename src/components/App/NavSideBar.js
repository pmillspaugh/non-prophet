import styled from 'styled-components/macro';
import Logo from './Logo';
import { NavLink, Link } from 'react-router-dom';
import { X } from 'react-feather';
import Spacer from '../Spacer';
import { COLORS } from '../../constants';

const NavSideBar = ({ menuTransform, toggleMenuTransform }) => {
  return (
    <Wrapper menuTransform={menuTransform}>
      <XIcon color={COLORS.aliceBlue} size={36} onClick={toggleMenuTransform} />
      <Link to='/' onClick={toggleMenuTransform}>
        <LogoWrapper>
          <Logo source='../../../assets/logo/logo-aliceBlue.png' />
        </LogoWrapper>
      </Link>
      <NavList>
        <NavSideBarLink to='/about' onClick={toggleMenuTransform}>
          About
        </NavSideBarLink>
        <Spacer size='16px' />
        <NavSideBarLink to='/the-shirt' onClick={toggleMenuTransform}>
          The Shirt
        </NavSideBarLink>
        <Spacer size='16px' />
        <NavSideBarLink to='/the-hoodie' onClick={toggleMenuTransform}>
          The Hoodie
        </NavSideBarLink>
        <Spacer size='16px' />
        <NavSideBarLink to='/the-beanie' onClick={toggleMenuTransform}>
          The Beanie
        </NavSideBarLink>
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
`;

const NavSideBarLink = styled(NavLink)`
  color: ${COLORS.aliceBlue};
  text-decoration: none;
`;

const XIcon = styled(X)`
  position: absolute;
  top: 12px;
  right: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export default NavSideBar;
