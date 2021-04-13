import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';

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
