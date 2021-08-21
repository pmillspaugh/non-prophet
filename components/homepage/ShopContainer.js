import styled from 'styled-components';
import Link from 'next/link';
import Spacer from '../utils/Spacer';
import ImageContainer from './ImageContainer';
import navyShirt from '../../public/images/theShirt/navy/shirt-navy-flat-1.png';
import navyHoodie from '../../public/images/theHoodie/navy/hoodie-navy-flat-1.png';
import navyBeanie from '../../public/images/theBeanie/navy/beanie-navy-flat-1.png';

const ShopContainer = () => {
  return (
    <Wrapper>
      <Link href='/the-shirt' passHref>
        <a>
          <ImageContainer source={navyShirt} product='The Shirt.' />
        </a>
      </Link>
      <Spacer size='24px' />
      <Link href='/the-hoodie' passHref>
        <a>
          <ImageContainer source={navyHoodie} product='The Hoodie.' />
        </a>
      </Link>
      <Spacer size='24px' />
      <Link href='/the-beanie' passHref>
        <a>
          <ImageContainer source={navyBeanie} product='The Beanie.' />
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default ShopContainer;
