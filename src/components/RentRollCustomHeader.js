import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from './coreui/FlexContainer';

import RentRollCustomHeaderRadioWithLabel from './RentRollCustomHeaderRadioWithLabel';
import RentRollCustomHeaderTemplateSelection from './RentRollCustomHeaderTemplateSelection';

const RentRollCustomHeader = ({
  createCustomRentRoll,
  isCreateCustomRentRoll,
  hasCustomRentRoll,
  sources,
  templateTarget,
  type,
  updateIsCreateCustomRentRoll,
  updateTemplateTarget,
}) => {
  const transformedSources = [
    ...sources, {
      label: 'No template',
      value: 'NO TEMPLATE',
    },
  ];

  return (
    <FlexContainer
      width="fullWidth"
      flexShrink="0"
      padding="padAll"
      justifyContent="space-between"
    >
      <RentRollCustomHeaderRadioWithLabel
        isCreateCustomRentRoll={isCreateCustomRentRoll}
        updateIsCreateCustomRentRoll={updateIsCreateCustomRentRoll}
        hasCustomRentRoll={hasCustomRentRoll}
      />
      <RentRollCustomHeaderTemplateSelection
        createCustomRentRoll={createCustomRentRoll}
        hasCustomRentRoll={hasCustomRentRoll}
        isCreateCustomRentRoll={isCreateCustomRentRoll}
        templateTarget={templateTarget}
        transformedSources={transformedSources}
        type={type}
        updateTemplateTarget={updateTemplateTarget}
      />
    </FlexContainer>
  );
};

RentRollCustomHeader.propTypes = {
  createCustomRentRoll: PropTypes.func,
  isCreateCustomRentRoll: PropTypes.bool,
  hasCustomRentRoll: PropTypes.bool,
  sources: PropTypes.array,
  templateTarget: PropTypes.string,
  type: PropTypes.string,
  updateIsCreateCustomRentRoll: PropTypes.func,
  updateTemplateTarget: PropTypes.func,
};

export default RentRollCustomHeader;
