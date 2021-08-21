import styled from 'styled-components';
import Link from 'next/link';
import { COLORS, WEIGHTS } from '../../styles/constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        @2021&nbsp;
        <Link href='/about' passHref>
          <FooterLink>non-prophet</FooterLink>
        </Link>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-weight: ${WEIGHTS[600]};
  color: ${COLORS.oxfordBlue};
`;

export default Footer;
