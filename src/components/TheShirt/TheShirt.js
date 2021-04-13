import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';
import ProductDisplay from '../product/ProductDisplay';

const shirtImageCollection = [
  '../../assets/theShirt/navy/shirt-navy-flat-1.png',
];

const TheShirt = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='The Shirt.' />
        <ProductDisplay imageCollection={shirtImageCollection} />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheShirt;
