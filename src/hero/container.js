import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Background,
  Text,
  Box,
} from 'www-coreui';

import bgImage from '../assets/images/floral_bg_sm.jpg';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedBox
        bg="black"
        height="100vh"
        width={1}
      >
        <Background
          content={bgImage}
          backgroundSize="50%"
          filter="brightness(0.8)"
        >
          <ExtendedFlex
            flexDirection="column"
            w={1}
            height="100%"
            justify="center"
            align="center"
          >
            <Box>
              <Text
                fontSize={[60, 5, 128]}
                fontFamily="monoton"
                m={0}
                display="block"
                color="white"
                animation="neonPink 1.5s ease-in-out infinite alternate"
                animatedNeon="neonPink"
              >
                Wen
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={[60, 5, 128]}
                fontFamily="monoton"
                m={0}
                display="block"
                color="white"
                animation="neonPink 1.5s ease-in-out infinite alternate"
                animatedNeon="neonPink"
              >
                Wes
              </Text>
            </Box>
            <Box>
              <Text
                fontFamily="monoton"
                fontSize={[60, 5, 128]}
                m={0}
                display="block"
                color="white"
                animation="neonWhite 0.5s ease-in-out infinite alternate"
                animatedNeon="neonWhite"
              >
                Wed
              </Text>
            </Box>
          </ExtendedFlex>
        </Background>
      </ExtendedBox>
    );
  }
}

export default Hero;
