import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../components/coreui/FlexContainer';
import Text from '../../components/coreui/Text';
import VerticalItemSpacer from '../../components/coreui/VerticalItemSpacer';

const DateDisplay = ({ data }) => {
  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      padding="padAll"
      alignItems="center"
      justifyContent="center"
    >
      <FlexContainer
        flexDirection="column"
        padding="60px"
        alignItems="center"
        justifyContent="center"
        border="1px solid white"
      >
        {
          data.map(
            (date) => (
              <VerticalItemSpacer
                borderWidth="0 0 2px 0"
                borderColor="white"
                borderStyle="solid"
                width="auto"
                padding="0 10px"
              >
                <Text
                  family="freightMicroPro"
                  size="xxxlarge"
                  color="white"
                >
                  { date }
                </Text>
              </VerticalItemSpacer>
            )
          )
        }
      </FlexContainer>
    </FlexContainer>
  );
}

DateDisplay.propTypes = {
  data: PropTypes.array,
};

export default DateDisplay;
