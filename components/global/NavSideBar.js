import styled from 'styled-components';
import Link from 'next/link';
import Spacer from '../utils/Spacer';
import Logo from '../utils/Logo';
import whiteLogo from '../../public/images/logo/logo-aliceBlue.png';
import { X } from 'react-feather';
import { COLORS } from '../../styles/constants';

const NavSideBar = ({ menuTransform, toggleMenuTransform }) => {
  return (
    <Wrapper menuTransform={menuTransform}>
      <XIcon color={COLORS.aliceBlue} size={36} onClick={toggleMenuTransform} />
      <LogoWrapper onClick={toggleMenuTransform}>
        <Logo source={whiteLogo} />
      </LogoWrapper>
      <NavList>
        <Link href='/about' passHref>
          <NavSideBarLink onClick={toggleMenuTransform}>About</NavSideBarLink>
        </Link>
        <Spacer size='16px' />
        <Link href='/the-shirt' passHref>
          <NavSideBarLink onClick={toggleMenuTransform}>
            The Shirt
          </NavSideBarLink>
        </Link>
        <Spacer size='16px' />
        <Link href='/the-hoodie' passHref>
          <NavSideBarLink onClick={toggleMenuTransform}>
            The Hoodie
          </NavSideBarLink>
        </Link>
        <Spacer size='16px' />
        <Link href='/the-beanie' passHref>
          <NavSideBarLink onClick={toggleMenuTransform}>
            The Beanie
          </NavSideBarLink>
        </Link>
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

const NavSideBarLink = styled.a`
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
