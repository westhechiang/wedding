import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  TextLink,
} from 'www-coreui';

import Body from '../components/Body';

import celebrate from '../assets/images/flamingos.png';
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
        bgImage={celebrate}
        bgSize="cover"
        py={[80, 40, 0]}
      >
        <ExtendedFlex
          w={1}
          justify="center"
          align="center"
        >
          <ExtendedBox
            w={[300, 400, 600]}
            height={[300, 400, 600]}
            border={3}
            borderRadius={4}
            bgImage={bgImage}
            boxShadow={0}
            bgSize="cover"
            bgPosition="20%"
            borderColor="white"
            overflowX="hidden"
            overflowY="hidden"
          />
        </ExtendedFlex>
        <ExtendedFlex
          w={1}
          height={[400, 400, '100vh']}
          flexDirection="column"
          justify="center"
          align={['center', 'center', 'flex-start']}
        >
          <Body
            type="B3"
            color="pink.0"
            fontWeight={[900]}
            m={0}
            mb={[40, 40, 60]}
          >
              Come celebrate with us!
          </Body>
          <TextLink
            w={[300, 300, 400]}
            bg="transparent"
            color="white"
            transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
            textAlign="center"
            hoverBackgroundColor="white"
            hoverColor="#F6C98C"
            border={1}
            borderColor="white"
            borderRadius={3}
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
