import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';
import PropertyProfileIcon from './PropertyProfileIcon';


const PropertyProfile = ({ property }) => (
  <FlexContainer height="fullHeight" justifyContent="center" alignItems="center">
    <PropertyProfileIcon />
    <FlexContainer flexDirection="column" alignItems="flex-start" padding="padLeft">
      <Text
        size="xlarge"
        color="blue4"
        lineHeight="20px"
      >
        {property.property_name}
      </Text>
      <Text
        size="small"
        color="gray4"
        lineHeight="18px"
      >
        {`${property.property_address_primary_number}
           ${property.property_address_secondary_designator}
           ${property.property_address_secondary_number}
           ${property.property_address_street_name}
           ${property.property_address_street_suffix}
           ${property.property_city}
           ${property.property_stateid},
           ${property.property_zipcode}
          `}
      </Text>
    </FlexContainer>
  </FlexContainer>
);

PropertyProfile.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
  }),
};

export default PropertyProfile;
