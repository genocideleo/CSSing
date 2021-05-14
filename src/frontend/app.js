import withRoot from './modules/withRoot';
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import Landing from './modules/views/Landing';

import Navbar from './modules/views/Navbar';

function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
