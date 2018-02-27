import React from 'react';
import PropTypes from 'prop-types';

import {
  Flex,
} from 'grid-styled';
import {
  Image,
  ExtendedFlex,
  Text,
} from 'www-coreui';

import Pineapple from '../../assets/images/pineapple_hero_3.png';

const PineappleDisplay = ({
  data,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      width={1}
      align="center"
      position="relative"
      justify="flex-end"
    >
      <Image
        src={Pineapple}
        w={[1]}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
      <ExtendedFlex
        height="550px"
        flexDirection="column"
        justify="flex-end"
      >
        {
          data.map(
            row => {
              return (
                <Flex key={row.id}>
                  <Text
                    color="white"
                  >
                    {row.pos1.value}
                  </Text>
                  <Text
                    color="white"
                  >
                    {row.pos2.value}
                  </Text>
                </Flex>
              )
            }
          )
        }
      </ExtendedFlex>
    </ExtendedFlex>
  );
}

PineappleDisplay.propTypes = {
  data: PropTypes.array,
};

export default PineappleDisplay;
