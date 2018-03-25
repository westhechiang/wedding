import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Span,
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
          We&#39;re Getting Married!
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
            <a
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=WenWesWed&dates=20181110T150000/20181110T235900&ctz=America/Los_Angeles&details=For+details,+link+here:+http://www.wenweswed.com&location=82950+61st.+Ave.,+Vista+Aanta+Rosa+CA+92274&sf=true&output=xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                w={30}
                src={calendarIcon}
                p={20}
                border={1}
                borderRadius={3}
                hover
                borderColor="pink.1"
              />
            </a>
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              color="pink.1"
              fontSize={[1, 2, 3]}
              m={0}
              mb={40}
              pt={10}
            >
              Add to Calendar
            </Text>
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
              November 10
              <Span
                fontSize={[2, 3, 4]}
              >
                th
              </Span>,
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              fontSize={[4, 5, 6]}
              color="pink.1"
              m={0}
              pt={10}
            >
              2018
            </Text>
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
            <a
              href="https://goo.gl/maps/ouRYNHu7AF12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                w={30}
                p={20}
                border={1}
                borderRadius={3}
                hover
                borderColor="pink.1"
                src={mapIcon}
              />
            </a>
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              color="pink.1"
              fontSize={[1, 2, 3]}
              m={0}
              mb={40}
              pt={10}
            >
              Get Directions
            </Text>
            <Text
              display="block"
              textAlign="center"
              color="pink.1"
              fontFamily="poiretOne"
              fontSize={[5, 6, 7]}
              m={0}
              pt={10}
            >
              82950 61<Span fontSize={[2, 3, 4]}>st</Span> A<Span fontSize={[2, 3, 4]}>ve.</Span>
            </Text>
            <Text
              display="block"
              textAlign="center"
              fontFamily="poiretOne"
              color="pink.1"
              fontSize={[4, 5, 6]}
              m={0}
              pt={10}
            >
               Vista Santa Rosa, CA 92274
            </Text>
          </ExtendedFlex>
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}

export default LocationTime;
