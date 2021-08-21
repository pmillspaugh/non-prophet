import styled from 'styled-components';
import Head from 'next/head';
import MaxWidthWrapper from '../components/layout/MaxWidthWrapper';
import Landing from '../components/utils/Landing';
import Section from '../components/homepage/Section';
import EJIAnchor from '../components/homepage/EJIAnchor';
import ShopContainer from '../components/homepage/ShopContainer';
import SignUp from '../components/homepage/SignUp';

const Home = () => {
  return (
    <>
      <Head>
        <title>non-prophet | Home.</title>
        <meta
          name="description"
          content="Welcome to non-prophet | Shop e-commerce, all profit donated to the Equal Justice Initiative"
        />
      </Head>
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
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;

export default Home;
