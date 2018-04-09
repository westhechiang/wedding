import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
} from 'www-coreui';

import PlacesToStay from './components/PlacesToStay';
import ThingsToDo from './components/ThingsToDo';
import Travelling from './components/Travelling';

import Body from '../components/Body';
import ResponsiveLine from '../components/ResponsiveLine';

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
        height={['auto', '100vh']}
        pb={['100px']}
      >
        <Body
          type="B3"
          pt={[60, 100]}
          pb={[120, 80]}
          m={0}
          color="pink.1"
        >
          Recommendations
        </Body>
        <ExtendedFlex
          justify="center"
          align="center"
          flexDirection={['column', 'column', 'row']}
          w={1}
        >
          <PlacesToStay />
          <ResponsiveLine />
          <ThingsToDo />
          <ResponsiveLine />
          <Travelling />
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}

export default Recommendations;
