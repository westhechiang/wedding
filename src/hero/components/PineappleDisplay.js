import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../components/coreui/FlexContainer';
import Image from '../../components/coreui/Image';
import Text from '../../components/coreui/Text';

import Pineapple from '../../assets/images/pineapple_hero_3.png';

const PineappleDisplay = ({
  data,
}) => {
  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      alignItems="center"
      position="relative"
      justifyContent="flex-end"
    >
      <Image
        src={Pineapple}
        height="100%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
      <FlexContainer
        height="550px"
        flexDirection="column"
        justifyContent="flex-end"
      >
        {
          data.map(
            row => (
              <FlexContainer key={row.id}>
                <Text
                  size="xxxlarge"
                  color="white"
                  family="pacifico"
                  lineHeight="98px"
                >
                  {row.pos1.value}
                </Text>
                <Text
                  size="xxxlarge"
                  color="white"
                  family="pacifico"
                  opacity={row.pos2.opacity}
                  transition="opacity 1s linear"
                  lineHeight="98px"
                >
                  {row.pos2.value}
                </Text>
              </FlexContainer>
            )
          )
        }
      </FlexContainer>
    </FlexContainer>
  );
}

PineappleDisplay.propTypes = {
  data: PropTypes.array,
};

export default PineappleDisplay;
