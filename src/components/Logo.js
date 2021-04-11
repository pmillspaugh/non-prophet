// TODO: add props for different colored logos
import styled from 'styled-components/macro';

const Logo = () => {
  return (
    <LogoLink href='/'>
      <LogoImage
        src='../../../assets/logo/logo-harvestGold.png'
        alt='yellow non-prophet logo'
      />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  width: 125px;
  overflow: hidden;

  @media (min-width: 576px) {
    & {
      width: 150px;
    }
  }
`;

const LogoImage = styled.img``;

export default Logo;
