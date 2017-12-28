import React from 'react';

import FlexContainer from '../components/coreui/FlexContainer';
import Text from '../components/coreui/Text';

import { theme } from '../ui/index';

class Hero extends React.Component {
  render() {
    const gradient =`
      linear-gradient(
        ${theme.color.white} 35%,
        ${theme.color.black} 100%
      );
    `;

    return (
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        background={gradient}
        backgroundType="linear"
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
