import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Text,
  TextLink,
} from 'www-coreui';

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
          Where to Stay &amp; What to Do
        </Text>
        <ExtendedFlex
          justify="center"
          align="center"
          flexDirection={['column', 'column', 'row']}
          w={1}
          height="60%"
        >
          <ExtendedFlex
            w={[1, 1, 0.5]}
            pr={[0, 0, 10]}
            py={[10, 10, 10]}
            justify="center"
            align="center"
            flexDirection="column"
          >
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              fontSize={[5, 6, 7]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              Places to stay:
            </Text>
            <TextLink
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              href="https://www.airbnb.com/s/Palm-Springs--CA--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Palm%20Springs%2C%20CA%2C%20United%20States&place_id=ChIJs-Xb_9Qa24ARfHntwodp5aE&checkin=2018-11-09&checkout=2018-11-10&children=0&infants=0&adults=2&guests=2&allow_override%5B%5D=&s_tag=Sn-grE_N"
              hoverColor="white"
              fontSize={[3, 4, 5]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              1. AirBnb
            </TextLink>
            <TextLink
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              hoverColor="white"
              fontSize={[3, 4, 5]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              2. AirBnb
            </TextLink>
            <TextLink
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              hoverColor="white"
              fontSize={[3, 4, 5]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              3. AirBnb
            </TextLink>
          </ExtendedFlex>

          <ExtendedBox
            w={[0.8, 0.8, '1px']}
            my={[80, 80, 20]}
            bg="pink.1"
            height={['1px', '1px', '400px']}
          />

          <ExtendedFlex
            w={[1, 1, 0.5]}
            pl={[0, 0, 10]}
            py={[10, 10, 10]}
            justify="center"
            align="center"
            flexDirection="column"
          >
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              hoverColor="white"
              fontSize={[5, 6, 7]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              Things to do:
            </Text>
            <TextLink
              display="block"
              textAlign="center"
              hoverColor="white"
              fontFamily="poiretOne"
              fontSize={[3, 4, 5]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              1. AirBnb
            </TextLink>
            <TextLink
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              hoverColor="white"
              fontSize={[3, 4, 5]}
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              2. AirBnb
            </TextLink>
            <TextLink
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              fontSize={[3, 4, 5]}
              hoverColor="white"
              m={0}
              w={1}
              color="pink.1"
              pt={10}
            >
              3. AirBnb
            </TextLink>
          </ExtendedFlex>
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}

export default Recommendations;
