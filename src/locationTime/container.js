import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Text,
  Image,
} from 'www-coreui';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mapIcon from '../assets/images/map-icon.svg';

class LocationTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedBox
        px={[20, 40]}
        bg="#050A1D"
        height={['100vh']}
      >
        <Text
          pt={80}
          pb={[20, 60]}
          display="block"
          textAlign="center"
          fontFamily="poiretOne"
          fontSize={[24, 51, 78]}
          m={0}
          color="#BA9991"
        >
          We&#39;re getting married!
        </Text>
        <ExtendedFlex
          justify="center"
          align="center"
          flexDirection={['column', 'row']}
          w={1}
          height="60%"
        >
          <ExtendedFlex
            w={[1, 0.5]}
            pr={[0, 10]}
            py={[10, 10]}
            justify="center"
            align="center"
            flexDirection="column"
          >
            <Image
              w={30}
              src={calendarIcon}
              pb={20}
            />
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              fontSize={[24, 51, 78]}
              m={0}
              color="#BA9991"
              pt={10}
            >
              November 10th
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              fontSize={[24, 51, 78]}
              color="#BA9991"
              m={0}
              pt={10}
            >
              2018
            </Text>
          </ExtendedFlex>

          <ExtendedBox
            w={[0.8, '1px']}
            my={[80, 20]}
            bg="#BA9991"
            height={['1px', '300px']}
          />

          <ExtendedFlex
            w={[1, 0.5]}
            pl={[0, 10]}
            py={[10, 10]}
            justify="center"
            align="center"
            flexDirection="column"
          >
            <Image
              w={30}
              pb={20}
              src={mapIcon}
            />
            <Text
              display="block"
              textAlign="center"
              color="#BA9991"
              fontFamily="poiretOne"
              fontSize={[24, 51, 78]}
              m={0}
              pt={10}
            >
              Palm Springs
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              color="#BA9991"
              fontSize={[24, 51, 78]}
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
