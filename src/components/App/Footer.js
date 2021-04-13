import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        @2021&nbsp;
        <FooterLink href='/'>non-prophet</FooterLink>
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
  color: ${COLORS.harvestGold};
`;

export default Footer;
