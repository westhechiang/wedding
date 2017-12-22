import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '../components/coreui/FlexContainer';
import Text from '../components/coreui/Text';
import PropertyProfileIcon from '../components/PropertyProfileIcon';
import ItemSpacer from '../components/coreui/ItemSpacer';

const TablePropertyIconNameAddress = ({ property }) => (
  <FlexContainer
    alignItems="center"
    justifyContent="flex-start"
  >
    {console.log(property, 'TablePropertyIconNameAddress')}
    <ItemSpacer>
      <PropertyProfileIcon />
    </ItemSpacer>
    <ItemSpacer>
      <FlexContainer
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Text
          size="xsmall"
          weight="semiBold"
        >
          {property.property_name}
        </Text>
        <Text
          size="xsmall"
        >
          {
            `${property.property_address}`
          }
        </Text>
        <Text
          size="xsmall"
        >
          {
            `${property.property_city}
              ${property.property_state},
              ${property.property_zip}`
          }
        </Text>
      </FlexContainer>
    </ItemSpacer>
  </FlexContainer>
);

TablePropertyIconNameAddress.propTypes = {
  property: PropTypes.object,
};

export default TablePropertyIconNameAddress;
