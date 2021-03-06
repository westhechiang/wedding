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
      px={[20, 40]}
      py={[10, 10, 10]}
      flexDirection="column"
    >
      <Body
        type="B1"
        hoverColor="white"
        m={0}
        w={1}
        textAlign="center"
        color="pink.1"
        pb={20}
      >
        Places to stay:
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
          AirBnb ($-$$)
        </Body>
        <Body
          type="B2"
          m={0}
          color="pink.1"
        >
          Palm Springs is known to have a great selection of
          <TextLink
            ml={2}
            fontFamily="poiretOne"
            textDecoration="underline"
            color="pink.1"
            target="_blank"
            hoverColor="pink"
            transition="color 0.5s linear"
            href="https://bit.ly/2qdvINo"
            fontWeight={700}
          >
            awesome AirBnbs
          </TextLink>,
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
          textAlign="center"
          textTransform="uppercase"
          m={0}
          color="pink.1"
          py={10}
        >
          Polo Villas ($$)
        </Body>
        <Body
          type="B2"
          m={0}
          color="pink.1"
        >
          We&#39;ve reserved 2
          <TextLink
            color="pink.1"
            href="https://www.mclean.company/vacation-rentals/polo-villas/"
            target="_blank"
            fontFamily="poiretOne"
            textDecoration="underline"
            hoverColor="pink"
            transition="color 0.5s linear"
            fontWeight={700}
            ml={2}
          >
            5-bedroom houses
          </TextLink> adjacent to the wedding venue.
          <TextLink
            color="pink.1"
            href="https://docs.google.com/spreadsheets/d/1Hw5WBzIumNflW2zwUNDY4iY1Y0cVdmN0ony89O-zh4I/edit?usp=sharing"
            fontFamily="poiretOne"
            textDecoration="underline"
            target="_blank"
            fontWeight={700}
            hoverColor="pink"
            transition="color 0.5s linear"
            ml={2}
          >
            Fill out this google sheet
          </TextLink>, and
          Venmo us (@wesley-chiang) to secure your spot.
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
          La Quinta ($$$$)
        </Body>
        <Body
          type="B2"
          m={0}
          color="pink.1"
        >
          <TextLink
            fontFamily="poiretOne"
            textDecoration="underline"
            color="pink.1"
            href="https://secure3.hilton.com/en_US/wa/reservation/book.htm?arrival=2018-11-9&departure=2018-11-11&ctyhocn=PSPLQWA&inputModule=HOTEL_SEARCH&res_submit=Check+Rates"
            hoverColor="pink"
            target="_blank"
            transition="color 0.5s linear"
            mr={2}
            fontWeight={700}
          >
            Nearest major hotel
          </TextLink>
          near the wedding venue (~4.2 miles / 8 min).
          Highly recommend booking early.
        </Body>
      </ExtendedFlex>
    </ExtendedFlex>
  );
};

export default PlacesToStay;
