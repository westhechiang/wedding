import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Text,
} from 'www-coreui';

import PlacesToStay from './components/PlacesToStay';
import ThingsToDo from './components/ThingsToDo';
import Travelling from './components/Travelling';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedBox
        px={[20, 40]}
        bg="blue.1"
        height={['100vh']}
      >
        <Text
          pt={[60, 100]}
          pb={[120, 80]}
          display="block"
          textAlign="center"
          fontFamily="poiretOne"
          fontSize={[5, 6, 7]}
          m={0}
          color="pink.1"
        >
          Recommendations
        </Text>
        <ExtendedFlex
          justify="center"
          align="center"
          flexDirection={['column', 'column', 'row']}
          w={1}
          height="60%"
        >
          <PlacesToStay />
          <ExtendedBox
            w={[0.8, 0.8, '1px']}
            my={[80, 80, 20]}
            bg="pink.1"
            height={['2px', '2px', '400px']}
          />

          <ThingsToDo />
          <ExtendedBox
            w={[0.8, 0.8, '1px']}
            my={[80, 80, 20]}
            bg="pink.1"
            height={['2px', '2px', '400px']}
          />
          <Travelling />
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}

export default Recommendations;
