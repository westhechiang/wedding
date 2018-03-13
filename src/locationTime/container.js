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
          pt={[20, 80]}
          pb={[20, 60]}
          display="block"
          textAlign="center"
          fontFamily="poiretOne"
          fontSize={[24, 78]}
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
          height={['60vh']}
        >
          <ExtendedFlex
            w={[1, 0.5]}
            pr={10}
            py={[100, 10]}
            justify="center"
            flexDirection="column"
          >
            <Image w={30} src={calendarIcon} />
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              fontSize={[24, 78]}
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
              fontSize={[24, 78]}
              color="#BA9991"
              m={0}
              pt={10}
            >
              2018
            </Text>
          </ExtendedFlex>
          <ExtendedBox
            w={[0.8, '1px']}
            bg="#BA9991"
            height={['1px', '300px']}
          />
          <ExtendedFlex
            w={[1, 0.5]}
            pl={10}
            py={[100, 10]}
            justify="center"
            flexDirection="column"
          >
            <Image w={30} src={mapIcon} />
            <Text
              display="block"
              textAlign="center"
              color="#BA9991"
              fontFamily="poiretOne"
              fontSize={[24, 78]}
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
              fontSize={[24, 78]}
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
