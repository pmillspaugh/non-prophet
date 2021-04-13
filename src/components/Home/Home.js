import MaxWidthWrapper from '../MaxWidthWrapper';
import Main from '../Main';
import Landing from '../Landing';
import Section from '../Section';
import EJIAnchor from './EJIAnchor';
import ShopContainer from './ShopContainer';
import SignUp from './SignUp';

const Home = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='Welcome to non-prophet.' />
        <Section>
          <h1>All profits are donated to the Equal Justice Initiative.</h1>
          <EJIAnchor />
        </Section>
        <Section>
          <h1>Shop.</h1>
          <ShopContainer />
        </Section>
        <SignUp />
      </Main>
    </MaxWidthWrapper>
  );
};

export default Home;
