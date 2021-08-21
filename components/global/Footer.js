import styled from 'styled-components';
import Link from 'next/link';
import { COLORS } from '../../styles/constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        @2021&nbsp;
        <FooterLink href='/about' passHref>
          <a>non-prophet</a>
        </FooterLink>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.oxfordBlue};
`;

export default Footer;
