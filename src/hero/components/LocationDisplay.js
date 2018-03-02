import React from 'react';

import FlexContainer from '../../components/coreui/FlexContainer';
import Text from '../../components/coreui/Text';

const LocationDisplay = () => {
  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        family="freightMicroPro"
        size="xxxlarge"
        color="white"
      >
        Palm Desert,
      </Text>
      <Text
        family="freightMicroPro"
        size="xxxlarge"
        color="white"
      >
       California
      </Text>
    </FlexContainer>
  );
};

export default LocationDisplay;
