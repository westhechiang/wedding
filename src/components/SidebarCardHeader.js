import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import SidebarCardHeaderLeft from './SidebarCardHeaderLeft';
import SidebarCardHeaderRight from './SidebarCardHeaderRight';

const SidebarCardHeader = ({
  property,
  isSelected,
  toggleSelectComp,
  propertyType,
  hideComp,
  showPropertyCardDetails,
}) => (
  <FlexContainer
    justifyContent="space-between"
    alignItems="center"
  >
    <SidebarCardHeaderLeft
      property={property}
      isSelected={isSelected}
      propertyType={propertyType}
    />
    {propertyType !== 'subject' &&
      <SidebarCardHeaderRight
        property={property}
        propertyType={propertyType}
        toggleSelectComp={toggleSelectComp}
        hideComp={hideComp}
        isSelected={isSelected}
        showPropertyCardDetails={showPropertyCardDetails}
      />
    }
  </FlexContainer>
);

SidebarCardHeader.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  toggleSelectComp: PropTypes.func,
  isSelected: PropTypes.bool,
  hideComp: PropTypes.func,
  propertyType: PropTypes.string,
  showPropertyCardDetails: PropTypes.func,
};

export default SidebarCardHeader;
