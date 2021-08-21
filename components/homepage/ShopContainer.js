import styled from 'styled-components';
import Link from 'next/link';
import ImageContainer from './ImageContainer';
import Spacer from '../utils/Spacer';

const ShopContainer = () => {
  return (
    <Wrapper>
      <Link href='/the-shirt' passHref>
        <a>
          <ImageContainer
            source='../../../assets/theShirt/navy/shirt-navy-flat-1.png'
            product='The Shirt.'
          />
        </a>
      </Link>
      <Spacer size='24px' />
      <Link href='/the-hoodie' passHref>
        <a>
          <ImageContainer
            source='../../../assets/theHoodie/navy/hoodie-navy-flat-1.png'
            product='The Hoodie.'
          />
        </a>
      </Link>
      <Spacer size='24px' />
      <Link href='/the-beanie' passHref>
        <a>
          <ImageContainer
            source='../../../assets/theBeanie/navy/beanie-navy-flat-1.png'
            product='The Beanie.'
          />
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
