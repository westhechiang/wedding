import React from 'react';
import {
  ThemeProvider,
} from 'styled-components';
import { Theme } from 'www-coreui'
import {
  Flex,
} from 'grid-styled';

import Hero from './hero/container';
// import Registry from './registry/container';
// import LocationTime from './locationTime/container';


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Flex
          flexDirection="column"
          width="100%"
        >
          <Hero />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
