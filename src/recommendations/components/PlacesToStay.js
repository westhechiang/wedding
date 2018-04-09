import React from 'react';
import {
  ExtendedFlex,
  TextLink,
} from 'www-coreui';

import Body from '../../components/Body';

const PlacesToStay = () => {
  return (
    <ExtendedFlex
      w={[1, 1, 0.5]}
      pr={[0, 0, 10]}
      py={[10, 10, 10]}
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Body
        type="B1"
        hoverColor="white"
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        Places to stay:
      </Body>
      <TextLink
        display="block"
        textAlign="center"
        fontFamily="poiretOne"
        href="https://www.airbnb.com/s/Palm-Springs--CA--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Palm%20Springs%2C%20CA%2C%20United%20States&place_id=ChIJs-Xb_9Qa24ARfHntwodp5aE&checkin=2018-11-09&checkout=2018-11-10&children=0&infants=0&adults=2&guests=2&allow_override%5B%5D=&s_tag=Sn-grE_N"
        hoverColor="white"
        fontSize={[2, 3, 4]}
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
        fontSize={[2, 3, 4]}
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        2. La Quinta
      </TextLink>
      <TextLink
        display="block"
        textAlign="center"
        fontFamily="poiretOne"
        hoverColor="white"
        fontSize={[2, 3, 4]}
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        3. Polo Villas
      </TextLink>
    </ExtendedFlex>
  );
};

export default PlacesToStay;
