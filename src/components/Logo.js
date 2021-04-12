// TODO: add props for different colored logos
import styled from 'styled-components/macro';

const Logo = ({ source }) => {
  return (
    <LogoWrapper>
      <LogoImage
        src={source}
        alt='yellow non-prophet logo'
      />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
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
