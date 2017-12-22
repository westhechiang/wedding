import React from 'react';
import PropTypes from 'prop-types';

import Select from './coreui/Select';
import Button from './coreui/Button';
import Text from './coreui/Text';
import FlexContainer from './coreui/FlexContainer';
import ItemSpacer from './coreui/ItemSpacer';

import propertyDetailsTypes from '../propertyDetails/types';

const isVisible = (isCreateCustomRentRoll, type) => (
  type !== propertyDetailsTypes.ADD_NEW_PROPERTY && isCreateCustomRentRoll
);

const RentRollCustomHeaderTemplateSelection = ({
  createCustomRentRoll,
  hasCustomRentRoll,
  isCreateCustomRentRoll,
  templateTarget,
  transformedSources,
  type,
  updateTemplateTarget,
}) => (
  isVisible(isCreateCustomRentRoll, type) &&
  <FlexContainer
    justifyContent="flex-end"
    alignItems="center"
  >
    <ItemSpacer height="auto">
      <Text
        size="xsmall"
        color="grayLight"
        weight="semiBold"
      >
        Base Template on:
      </Text>
    </ItemSpacer>
    <ItemSpacer>
      <Select
        width="125px"
        value={templateTarget}
        clearable={false}
        onChange={val => updateTemplateTarget(val.value)}
        options={transformedSources}
      />
    </ItemSpacer>
    <ItemSpacer>
      <Button
        theme="blue"
        onClick={createCustomRentRoll}
      >
        {`${!hasCustomRentRoll ? 'Create' : 'Update'} Custom Rent Roll`}
      </Button>
    </ItemSpacer>
  </FlexContainer>
);

RentRollCustomHeaderTemplateSelection.propTypes = {
  createCustomRentRoll: PropTypes.func,
  hasCustomRentRoll: PropTypes.bool,
  isCreateCustomRentRoll: PropTypes.bool,
  templateTarget: PropTypes.string,
  transformedSources: PropTypes.array,
  updateTemplateTarget: PropTypes.func,
  type: PropTypes.string,
};

export default RentRollCustomHeaderTemplateSelection;
