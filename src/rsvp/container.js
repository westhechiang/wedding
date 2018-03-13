import React from 'react';
import {
  ExtendedFlex,
  Background,
  Button,
} from 'www-coreui';

import bgImage from '../assets/images/cops_and_robbers1.jpg';

class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedFlex
        w={1}
        flexDirection={['column', 'column', 'row']}
        height="100vh"
        justify="center"
        align="center"
        bg="white"
      >
        <ExtendedFlex
          w={[1, 0.3]}
          height="100vh"
          justify="center"
          position="relative"
          align="center"
        >
          <Background
            w="600px"
            height="450px"
            position="absolute"
            right="-200px"
            content={bgImage}
            backgroundSize="contain"
            backgroundRepeatX="no-repeat"
          />
        </ExtendedFlex>
        <ExtendedFlex
          w={[1, 0.7]}
          bg="yellow"
          height="80vh"
          justify="center"
          align="center"
        >
          <Button
            width="400px"
            backgroundColor="transparent"
            color="white"
            transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
            hoverBackgroundColor="white"
            hoverColor="#F6C98C"
            border={2}
            borderColor="white"
            borderRadius={0}
            p={20}
            fontSize={24}
            fontWeight={300}
          >
            RSVP
          </Button>
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

export default Rsvp;
