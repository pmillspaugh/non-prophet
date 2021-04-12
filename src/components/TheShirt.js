import MaxWidthWrapper from './MaxWidthWrapper';
import Main from './Main';
import Landing from './Landing';

const TheShirt = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='The Shirt.' />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheShirt;
