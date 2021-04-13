import styled from 'styled-components/macro';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from '../About/About';
import TheShirt from '../TheShirt/TheShirt';
import Home from '../Home/Home';
import TheHoodie from '../TheHoodie/TheHoodie';
import TheBeanie from '../TheBeanie/TheBeanie';
import Footer from './Footer';
import { COLORS } from '../../constants';

const PrimaryContent = ({
  toggleMenuTransform,
  toggleCartTransform,
  contentFilter,
}) => {
  return (
    <Wrapper contentFilter={contentFilter}>
      <Header
        toggleMenuTransform={() => toggleMenuTransform()}
        toggleCartTransform={() => toggleCartTransform()}
      />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/the-shirt'>
          <TheShirt />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/the-hoodie'>
          <TheHoodie />
        </Route>
        <Route path='/the-beanie'>
          <TheBeanie />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  isolation: isolate;
  display: grid;
  grid-template-rows: 68px 1fr 68px;
  background-color: ${COLORS.aliceBlue};
  filter: ${(p) => p.contentFilter};
`;

export default PrimaryContent;
