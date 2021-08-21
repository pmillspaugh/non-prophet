import styled from 'styled-components';
import Image from 'next/image';

const Logo = ({ source }) => {
  return (
    <LogoWrapper>
      <Image src={source} alt='yellow non-prophet logo' fill='layout' />
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

export default Logo;
