import React from 'react';
import {
  ExtendedFlex,
  TextLink,
  Text,
} from 'www-coreui';

const ThingsToDo = () => {
  return (
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
        fontSize={[3, 4, 5]}
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
        fontSize={[3, 4, 5]}
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

export default ThingsToDo;
