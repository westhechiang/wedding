import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';
import ItemSpacer from './coreui/ItemSpacer';
import SidebarCardHeaderMarker from './SidebarCardHeaderMarker';

const SidebarCardHeaderLeft = ({
  property,
  propertyType,
  isSelected,
}) => (
  // FIXME: distance in miles should be done on the back end but we're doing this
  // on the front end due to time constraints
  <FlexContainer justifyContent="flex-start" alignItems="center">
    <ItemSpacer space="5px">
      <SidebarCardHeaderMarker
        isSelected={isSelected}
        propertyType={propertyType}
        markerLabel={property.markerLabel}
      />
    </ItemSpacer>
    <ItemSpacer>
      <FlexContainer
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Text color="white" size="xsmall">{property.property_name}</Text>
        <Text
          color="grayExtraLight"
          size="xxsmall"
          padding="3px 0 0 0"
        >
          {` ${property.property_address_primary_number}
             ${property.property_address_secondary_designator}
             ${property.property_address_secondary_number}
             ${property.property_address_street_name}
             ${property.property_address_street_suffix},
             ${property.property_city}
             ${property.property_stateid},
             ${property.property_zipcode}
            `}
        </Text>
      </FlexContainer>
    </ItemSpacer>
  </FlexContainer>
);

SidebarCardHeaderLeft.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  propertyType: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default SidebarCardHeaderLeft;
