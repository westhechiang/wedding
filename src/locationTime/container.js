import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Text,
} from 'www-coreui';

class LocationTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedBox
        py={[40, 80]}
        px={[20, 40]}
        bg="#F6F2E8"
        height={['100vh', '50vh']}
      >
        <ExtendedFlex
          justify="center"
          align="center"
          flexDirection={['column', 'row']}
          w={1}
          height={['100vh', '50vh']}
        >
          <ExtendedFlex
            w={[1, 0.5]}
            pr={10}
            py={10}
            justify="center"
            flexDirection="column"
          >
            <Text
              display="block"
              textAlign="center"
              fontFamily="comfortaa"
              fontSize={[12, 14]}
              m={0}
            >
              on
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="comfortaa"
              fontSize={[24, 36]}
              m={0}
              pt={10}
            >
              November 10th
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="comfortaa"
              fontSize={[24, 36]}
              m={0}
              pt={10}
            >
              2018
            </Text>
          </ExtendedFlex>
          <ExtendedFlex
            w={[1, 0.5]}
            pl={10}
            pt={[100, 10]}
            pb={10}
            justify="center"
            flexDirection="column"
          >
            <Text
              display="block"
              textAlign="center"
              fontFamily="comfortaa"
              fontSize={[12, 14]}
              m={0}
            >
              in
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="comfortaa"
              fontSize={[24, 36]}
              m={0}
              pt={10}
            >
              Palm Springs
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="comfortaa"
              fontSize={[24, 36]}
              m={0}
              pt={10}
            >
              CA
            </Text>
          </ExtendedFlex>
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}

export default LocationTime;
