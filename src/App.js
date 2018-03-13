import React from 'react';
import {
  ThemeProvider,
} from 'styled-components';
import { Theme } from 'www-coreui';
import {
  Flex,
} from 'grid-styled';

import Hero from './hero/container';
import LocationTime from './locationTime/container';
import Rsvp from './rsvp/container';
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
        <Oreo />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
