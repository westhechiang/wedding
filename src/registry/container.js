import React from 'react';
import {
  ExtendedFlex,
  ExtendedBox,
  Background,
  Image,
  TextLink,
} from 'www-coreui';

import bgImage from '../assets/images/string_lights_blurred.jpg';
import stellaImage from '../assets/images/swept.jpg';

class Registry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedFlex
        w={1}
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        height={['auto', '100vh']}
        justify="center"
        align="center"
        bg="white"
      >
        <ExtendedBox
          w={[1, 0.7]}
          height={[400, '80vh']}
        >
          <Background
            content={bgImage}
            backgroundSize="cover"
          >
            <ExtendedFlex
              w={[1, 0.7]}
              height={[400, '80vh']}
              justify="center"
              align="center"
              flexDirection="column"
              position="relative"
            >
              <TextLink
                width={[300, 400]}
                bg="white"
                color="black"
                transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
                hoverBackgroundColor="white"
                hoverColor="#D9EDEE"
                border={2}
                borderColor="white"
                borderRadius={0}
                p={[10, 20]}
                fontSize={24}
                fontWeight={300}
                href="http://wenweswed.rsvpify.com"
                target="_blank"
              >
                Registry
              </TextLink>
            </ExtendedFlex>
          </Background>
        </ExtendedBox>
        <ExtendedFlex
          w={[1, 0.3]}
          height={['auto', '100vh']}
          justify="center"
          position="relative"
          align="center"
        >
          <Image
            src={stellaImage}
            w={[1, 600]}
            position={['static', 'absolute']}
            left="-200px"
            border={[0, '20px solid white']}
          />
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

export default Registry;
