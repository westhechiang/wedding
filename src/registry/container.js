import React from 'react';
import {
  ExtendedFlex,
  ExtendedBox,
  Background,
  Button,
} from 'www-coreui';

import bgImage from '../assets/images/swept.jpg';

class Registry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedFlex
        w={1}
        flexDirection={['column', 'row']}
        height="100vh"
      >
        <ExtendedBox
          w={1}
          height={['50vh', '100vh']}
          bg=""
        >
          <Background
            content={bgImage}
            backgroundSize="cover"
          >
            <ExtendedFlex
              align="center"
              justify="center"
              height={['50vh', '100vh']}
            >
              <Button
                width="300px"
                bg="#231f20"
                color="white"
                hoverBackgroundColor="black"
                border={0}
                borderRadius={0}
                p={15}
                fontWeight={300}
              >
                RSVP
              </Button>
            </ExtendedFlex>
          </Background>
        </ExtendedBox>
        <ExtendedBox
          w={1}
          height={['50vh', '100vh']}
          bg="#D4F6FF"
        >
          <ExtendedFlex
            align="center"
            justify="center"
            height={['50vh', '100vh']}
          >
            <Button
              width="300px"
              bg="#231f20"
              color="white"
              hoverBackgroundColor="black"
              border={0}
              borderRadius={0}
              p={15}
              fontWeight={300}
            >
              Registry
            </Button>
          </ExtendedFlex>
        </ExtendedBox>
      </ExtendedFlex>
    );
  }
}

export default Registry;
