import React from 'react';
import {
  ExtendedFlex,
} from 'www-coreui';

import Body from '../../components/Body';

const Travelling = () => {
  return (
    <ExtendedFlex
      w={[1, 1, 0.5]}
      px={[20, 40]}
      py={[10, 10, 10]}
      flexDirection="column"
    >
      <Body
        type="B1"
        hoverColor="white"
        m={0}
        textAlign="center"
        w={1}
        color="pink.1"
        pb={20}
      >
       Travelling:
      </Body>

      <ExtendedFlex
        flexDirection="column"
        align="flex-start"
        pb={20}
        w={1}
      >
        <Body
          type="B4"
          fontSize={[2, 3, 4]}
          fontWeight={700}
          textTransform="uppercase"
          m={0}
          color="pink.1"
          py={10}
        >
          Driving from LA
        </Body>
        <Body
          type="B2"
          m={0}
          color="pink.1"
        >
          Since the majority of our guests are in the SoCal region, we highly
          recommend carpooling with one another. Parking situation TBD.
        </Body>
      </ExtendedFlex>

      <ExtendedFlex
        flexDirection="column"
        align="flex-start"
        pb={20}
        w={1}
      >
        <Body
          type="B4"
          fontSize={[2, 3, 4]}
          fontWeight={700}
          textTransform="uppercase"
          m={0}
          color="pink.1"
          py={10}
        >
          Flying in
        </Body>
        <Body
          type="B2"
          m={0}
          color="pink.1"
        >
          For those of you who are flying in, there are 2 airports:
          Palm Springs Int&#39;l and LAX. Palm Springs Int&#39;l is about 20 miles
          (~30 min.) from the wedding venue and LAX is about 142 miles (~2h 15min.)
          from the wedding venue.
        </Body>
      </ExtendedFlex>
    </ExtendedFlex>
  );
};

export default Travelling;
