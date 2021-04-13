import MaxWidthWrapper from '../App/MaxWidthWrapper';
import Main from '../App/Main';
import Landing from '../Landing';

const About = () => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Landing message='About.' />
      </Main>
    </MaxWidthWrapper>
  );
};

export default About;
