import MaxWidthWrapper from './MaxWidthWrapper';
import Main from './Main';
import Landing from './Landing';

const TheHoodie = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='The Hoodie.' />
      </Main>
    </MaxWidthWrapper>
  );
};

export default TheHoodie;
