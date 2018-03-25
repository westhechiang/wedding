import React from 'react';
import {
  ExtendedFlex,
  Image,
  Text,
  TextLink,
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
        height={['auto', 'auto', '100vh']}
        justify="center"
        align="center"
        bg="white"
      >
        <ExtendedFlex
          w={[1, 1, 0.3]}
          height={['auto', 'auto', '100vh']}
          justify="center"
          position="relative"
          align="center"
        >
          <Image
            src={bgImage}
            w={[1, 1, 600]}
            position={['static', 'static', 'absolute']}
            right="-200px"
            border={[0, 0, '20px solid white']}
          />
        </ExtendedFlex>
        <ExtendedFlex
          w={[1, 1, 0.7]}
          bg="yellow"
          height={[400, 400, '80vh']}
          justify="center"
          align="center"
          flexDirection="column"
        >
          <Text
            w={[1, 1, 0.4]}
            display="block"
            textAlign="center"
            color="white"
            fontFamily="poiretOne"
            fontSize={[5, 6, 7]}
            m={0}
            mb={[40, 40, 60]}
          >
              Come celebrate with us!
          </Text>
          <TextLink
            width={[300, 300, 400]}
            backgroundColor="transparent"
            color="white"
            transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
            hoverBackgroundColor="white"
            hoverColor="#F6C98C"
            border={2}
            borderColor="white"
            borderRadius={0}
            p={[10, 10, 20]}
            fontSize={24}
            fontWeight={300}
            href="http://wenweswed.rsvpify.com"
            target="_blank"
          >
            RSVP
          </TextLink>
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

export default Rsvp;
