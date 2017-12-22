import React from 'react';
import PropTypes from 'prop-types';
import VerticalItemSpacer from './coreui/VerticalItemSpacer';
import FlexContainer from './coreui/FlexContainer';
import Checkbox from './coreui/Checkbox';
import Text from './coreui/Text';

const RefineListSource = ({
  count,
  isSelected,
  handleChange,
  id,
  source,
}) => (
  <VerticalItemSpacer space="3px">
    <FlexContainer
      justifyContent="flex-start"
      alignItems="center"
    >
      <Checkbox
        onChange={handleChange}
        checked={isSelected}
        id={id}
      />
      <Text
        color="white"
        size="xsmall"
      >
        {source}
      </Text>
      <Text
        textIndent="5px"
        color="grayExtraLight"
        size="xsmall"
      >
       ({count})
      </Text>
    </FlexContainer>
  </VerticalItemSpacer>
);

RefineListSource.propTypes = {
  count: PropTypes.number,
  isSelected: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  handleChange: PropTypes.func,
  source: PropTypes.string,
  id: PropTypes.string,
};

export default RefineListSource;
