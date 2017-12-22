import React from 'react';

import Hero from './hero/container';
import Registry from './registry/container';

import FlexContainer from './components/coreui/FlexContainer';

class App extends React.Component {
  render() {
    return (
      <FlexContainer
        flexDirection="column"
        width="100%"
      >
        <Hero />
        <Registry />
      </FlexContainer>
    );
  }
}

export default App;
