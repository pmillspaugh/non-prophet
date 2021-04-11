import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import Header from '../Header';
import About from '../About';
import TheShirt from '../TheShirt';
import Home from '../Home';
import TheHoodie from '../TheHoodie';
import TheBeanie from '../TheBeanie';
import Footer from '../Footer';
import { COLORS } from '../../constants';

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
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
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
  background-color: ${COLORS.aliceBlue};
  display: grid;
  grid-template-rows: 68px 1fr 68px;
`;

export default App;
