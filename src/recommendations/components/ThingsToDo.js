import React from 'react';
import {
  ExtendedFlex,
  TextLink,
} from 'www-coreui';

import Body from '../../components/Body';

const ThingsToDo = () => {
  return (
    <ExtendedFlex
      w={[1, 1, 0.33]}
      px={20}
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
        py={10}
      >
        Things to do:
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
        href="https://www.tripadvisor.com/Attraction_Review-g32847-d524662-Reviews-Indian_Canyons-Palm_Springs_Greater_Palm_Springs_California.html"
        fontSize={[2, 3, 4]}
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        2. Indian Canyons
      </TextLink>
      <TextLink
        display="block"
        textAlign="center"
        fontFamily="poiretOne"
        fontSize={[2, 3, 4]}
        href="https://www.nps.gov/jotr/index.htm"
        hoverColor="white"
        m={0}
        w={1}
        color="pink.1"
        pt={10}
      >
        3. Joshua Tree
      </TextLink>
    </ExtendedFlex>
  );
};

export default ThingsToDo;
