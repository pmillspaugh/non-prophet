import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import ImageContainer from './ImageContainer';

const ShopContainer = () => {
  return (
    <Wrapper>
      <Link to='/the-shirt'>
        <ImageContainer
          source='../../../assets/theShirt/navy/shirt-navy-flat-1.png'
          product='The Shirt.'
        />
      </Link>
      <Link to='/the-hoodie'>
        <ImageContainer
          source='../../../assets/theHoodie/navy/hoodie-navy-flat-1.png'
          product='The Hoodie.'
        />
      </Link>
      <Link to='/the-beanie'>
        <ImageContainer
          source='../../../assets/theBeanie/navy/beanie-navy-flat-1.png'
          product='The Beanie.'
        />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default ShopContainer;
