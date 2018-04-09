import React from 'react';
import {
  ExtendedFlex,
  TextLink,
} from 'www-coreui';

import Body from '../../components/Body';

const Travelling = () => {
  return (
    <ExtendedFlex
      w={[1, 1, 0.5]}
      pl={[0, 0, 10]}
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
       Travelling:
      </Body>
      <TextLink
        display="block"
        textAlign="center"
        hoverColor="white"
        fontFamily="poiretOne"
        fontSize={[2, 3, 4]}
        href="https://www.tripadvisor.com/Attraction_Review-g32847-d104111-Reviews-Palm_Springs_Aerial_Tramway-Palm_Springs_Greater_Palm_Springs_California.html"
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        1. Palm Springs Aerial Tramway
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
        2. To
      </TextLink>
      <TextLink
        display="block"
        textAlign="center"
        fontFamily="poiretOne"
        fontSize={[2, 3, 4]}
        hoverColor="white"
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        3. Trip Advisor
      </TextLink>
    </ExtendedFlex>
  );
};

export default Travelling;
