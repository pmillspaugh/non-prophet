import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        @2021&nbsp;
        <FooterLink to='/about'>non-prophet</FooterLink>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.oxfordBlue};
`;

export default Footer;
