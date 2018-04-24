import React from 'react';
import { Theme, ThemeProvider, Flex } from 'www-coreui';

import Hero from './hero/container';
import LocationTime from './locationTime/container';
import Rsvp from './rsvp/container';
import Registry from './registry/container';
import Recommendations from './recommendations/container';
import Oreo from './oreo/container';


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Flex
        flexDirection="column"
        width="100%"
      >
        <Hero />
        <LocationTime />
        <Rsvp />
        <Recommendations />
        <Registry />
        <Oreo />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
