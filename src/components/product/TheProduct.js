import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import ProductDisplay from '../product/ProductDisplay';

const TheProduct = ({ product, price, details, colorChoices, sizeChoices, imageCollection, toggleCartTransform }) => {
  return (
    <MaxWidthWrapper>
      <Main>
        <ProductDisplay
          product={product}
          price={price}
          details={details}
          colorChoices={colorChoices}
          sizeChoices={sizeChoices}
          imageCollection={imageCollection}
          toggleCartTransform={toggleCartTransform}
        />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheProduct;
