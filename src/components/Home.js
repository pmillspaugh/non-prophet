import MaxWidthWrapper from './MaxWidthWrapper';
import Main from './Main';
import Landing from './Landing';
import Section from './Section';
import EJIAnchor from './EJIAnchor';
import ShopContainer from './ShopContainer';

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
        <Section>
          <h1>Keep me posted.</h1>
          {/* TODO: add form and extract */}
          <br />
          <p>Stay tuned for product releases and big announcements.</p>
        </Section>
      </Main>
    </MaxWidthWrapper>
  );
};

export default Home;
