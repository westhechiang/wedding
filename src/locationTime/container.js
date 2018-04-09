import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Span,
  Image,
} from 'www-coreui';

import Body from '../components/Body';
import ResponsiveLine from '../components/ResponsiveLine';

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
        <Body
          type="B3"
          pt={[60, 100]}
          textAlign="center"
          pb={[120, 80]}
          m={0}
          color="pink.1"
        >
          We&#39;re Getting Married!
        </Body>
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
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=WenWesWed&dates=20181110T150000/20181110T235900&ctz=America/Los_Angeles&details=For+details,+link+here:+http://www.wenweswed.com&location=82950+61st.+Ave.,+Vista+Santa+Rosa+CA+92274&sf=true&output=xml"
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
            <Body
              type="B2"
              color="pink.1"
              m={0}
              mb={40}
              pt={10}
            >
              Add to Calendar
            </Body>
            <Body
              type="B1"
              color="pink.1"
              m={0}
              pt={10}
            >
              November 10
              <Span
                fontSize={[2, 3, 4]}
              >
                th
              </Span>,
            </Body>
            <Body
              type="B1"
              color="pink.1"
              m={0}
              pt={10}
            >
              2018
            </Body>
          </ExtendedFlex>
          <ResponsiveLine />
          <ExtendedFlex
            w={[1, 1, 0.5]}
            pl={[0, 0, 10]}
            py={[10, 10, 10]}
            justify="center"
            align="center"
            flexDirection="column"
          >
            <a
              href="https://goo.gl/maps/pJEjbPzGbZG2"
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
            <Body
              type="B2"
              color="pink.1"
              m={0}
              mb={40}
              pt={10}
            >
              Get Directions
            </Body>
            <Body
              type="B1"
              color="pink.1"
              m={0}
              pt={10}
            >
              51205 Evangeline Way
            </Body>
            <Body
              type="B1"
              color="pink.1"
              m={0}
              pt={10}
            >
              La Quinta, CA 92253
            </Body>
          </ExtendedFlex>
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}

export default LocationTime;
