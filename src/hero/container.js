import React from 'react';

import FlexContainer from '../components/coreui/FlexContainer';
import Text from '../components/coreui/Text';

class Hero extends React.Component {
  render() {
    return (
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="pink"
        height="100vh"
        width="100%"
      >
        <Text>
          Hero
        </Text>
      </FlexContainer>
    )
  }

}

export default Hero;
