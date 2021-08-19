import { CSSReset, GlobalStyles } from '../styles/globals';

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <CSSReset />
      <GlobalStyles />
    </Component>
  );
};

export default App;
