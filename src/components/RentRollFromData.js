import React from 'react';
import PropTypes from 'prop-types';

import StyledReactTable from './coreui/StyledReactTable';
import FlexContainer from './coreui/FlexContainer';

import propertyDetailsTypes from '../propertyDetails/types';

const isVisible = type => type !== propertyDetailsTypes.ADD_NEW_PROPERTY;

const RentRollFromData = ({
  selectedSource,
  type,
  unitsDetails,
}) => (
  isVisible(type) &&
  <FlexContainer
    padding="padAll"
    width="fullWidth"
    flexShrink="0"
    flexDirection="column"
  >
    <StyledReactTable
      className="-striped -highlight"
      columns={unitsDetails[selectedSource].columns}
      data={unitsDetails[selectedSource].data}
      pageSize={unitsDetails[selectedSource].data.length}
      resizable
      showPagination={false}
      sortable
    />
  </FlexContainer>
);

RentRollFromData.propTypes = {
  type: PropTypes.string,
  unitsDetails: PropTypes.object,
  selectedSource: PropTypes.string,
};

export default RentRollFromData;
