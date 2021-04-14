/* Scrolls to top of page on every navigation change using withRouter, the history object, and useEffect. Source:
https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
https://reactrouter.com/web/api/history
https://reactrouter.com/web/api/withRouter
*/

import { useEffect } from 'react';
import { withRouter } from 'react-router';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => unlisten();
  }, []);
  return null;
};

export default withRouter(ScrollToTop);
