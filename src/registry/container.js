import React from 'react';

import FlexContainer from '../components/coreui/FlexContainer';
import Text from '../components/coreui/Text';

class Registry extends React.Component {
  render() {
    return (
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width="100%"
      >
        <Text>
          Registry
        </Text>
      </FlexContainer>
    );
  }
}

export default Registry;
