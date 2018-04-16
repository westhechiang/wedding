import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
} from 'www-coreui';

import Body from '../components/Body';
import Button from '../components/Button';

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
          w={[1, 1, 0.40]}
          justify={['center', 'center', 'flex-end']}
          align="center"
        >
          <ExtendedBox
            w={[300, 350, 400]}
            height={[300, 350, 400]}
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
          w={[1, 1, 0.60]}
          height={[400, 400, '100vh']}
          flexDirection="column"
          justify="center"
          align={['center', 'center', 'center']}
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
          <Button
            href="http://wenweswed.rsvpify.com"
          >
            RSVP
          </Button>
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

export default Rsvp;
