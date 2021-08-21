import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../utils/Logo';
import Spacer from '../utils/Spacer';
import { X } from 'react-feather';
import { COLORS } from '../../styles/constants';

const NavSideBar = ({ menuTransform, toggleMenuTransform }) => {
  return (
    <Wrapper menuTransform={menuTransform}>
      <XIcon color={COLORS.aliceBlue} size={36} onClick={toggleMenuTransform} />
      <LogoWrapper onClick={toggleMenuTransform}>
        <Logo source='../../../assets/logo/logo-aliceBlue.png' />
      </LogoWrapper>
      <NavList>
        <NavSideBarLink href='/about' passHref onClick={toggleMenuTransform}>
          <a>About</a>
        </NavSideBarLink>
        <Spacer size='16px' />
        <NavSideBarLink
          href='/the-shirt'
          passHref
          onClick={toggleMenuTransform}
        >
          <a>The Shirt</a>
        </NavSideBarLink>
        <Spacer size='16px' />
        <NavSideBarLink
          href='/the-hoodie'
          passHref
          onClick={toggleMenuTransform}
        >
          <a>The Hoodie</a>
        </NavSideBarLink>
        <Spacer size='16px' />
        <NavSideBarLink
          href='/the-beanie'
          passHref
          onClick={toggleMenuTransform}
        >
          <a>The Beanie</a>
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

// TODO: update to semantic button element (and verify styling is not broken)
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

const NavSideBarLink = styled(Link)`
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
