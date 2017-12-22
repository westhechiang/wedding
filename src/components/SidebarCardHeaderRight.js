import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import ItemSpacer from './coreui/ItemSpacer';
import CircleIcon from './CircleIcon';

const SidebarCardHeaderRight = ({
  property,
  toggleSelectComp,
  isSelected,
  hideComp,
  showPropertyCardDetails,
}) => (
  <FlexContainer
    justifyContent="flex-end"
    alignItems="center"
    padding="padRight"
  >
    <ItemSpacer space="5px">
      <CircleIcon
        handleClick={showPropertyCardDetails}
        callBackParam={property.property_id}
        type="showInfo"
      />
    </ItemSpacer>
    <ItemSpacer space="5px">
      <CircleIcon
        handleClick={hideComp}
        callBackParam={property.property_id}
        type="close"
      />
    </ItemSpacer>
    <ItemSpacer>
      <CircleIcon
        handleClick={toggleSelectComp}
        isSelected={isSelected}
        callBackParam={property}
        type="star"
      />
    </ItemSpacer>
  </FlexContainer>
);

SidebarCardHeaderRight.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  toggleSelectComp: PropTypes.func,
  hideComp: PropTypes.func,
  isSelected: PropTypes.bool,
  showPropertyCardDetails: PropTypes.func,
};

export default SidebarCardHeaderRight;
