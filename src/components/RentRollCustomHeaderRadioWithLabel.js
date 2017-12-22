import React from 'react';
import PropTypes from 'prop-types';

import Radio from './coreui/Radio';
import Text from './coreui/Text';
import FlexContainer from './coreui/FlexContainer';
import ItemSpacer from './coreui/ItemSpacer';

const RentRollCustomHeaderRadioWithLabel = ({
  isCreateCustomRentRoll,
  updateIsCreateCustomRentRoll,
  hasCustomRentRoll,
}) => (
  <FlexContainer
    justifyContent="flex-start"
    alignItems="center"
  >
    <ItemSpacer height="auto">
      <Radio
        value="from-custom"
        checked={isCreateCustomRentRoll}
        onChange={updateIsCreateCustomRentRoll}
      />
    </ItemSpacer>
    <ItemSpacer height="auto">
      <Text
        size="small"
        weight="semiBold"
        color="blueDark"
      >
        {`${!hasCustomRentRoll ? 'Create' : 'Update'} Custom Rent Roll`}
      </Text>
    </ItemSpacer>
  </FlexContainer>
);

RentRollCustomHeaderRadioWithLabel.propTypes = {
  isCreateCustomRentRoll: PropTypes.bool,
  hasCustomRentRoll: PropTypes.bool,
  updateIsCreateCustomRentRoll: PropTypes.func,
};

export default RentRollCustomHeaderRadioWithLabel;
