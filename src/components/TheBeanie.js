import MaxWidthWrapper from './MaxWidthWrapper';
import Main from './Main';
import Landing from './Landing';

const TheBeanie = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='The Beanie.' />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheBeanie;
