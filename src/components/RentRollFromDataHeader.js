import React from 'react';
import PropTypes from 'prop-types';

import Select from './coreui/Select';
import Button from './coreui/Button';
import Radio from './coreui/Radio';
import Text from './coreui/Text';
import FlexContainer from './coreui/FlexContainer';
import ItemSpacer from './coreui/ItemSpacer';

import propertyDetailsTypes from '../propertyDetails/types';

const isVisible = type => type !== propertyDetailsTypes.ADD_NEW_PROPERTY;

const RentRollFromDataHeader = ({
  handleCompareClick,
  isCreateCustomRentRoll,
  selectedCompareSource,
  selectedSource,
  sources,
  type,
  updateIsCreateCustomRentRoll,
  updateSelectedCompareSource,
  updateSelectedSource,
}) => (
  isVisible(type) &&
  <FlexContainer
    width="fullWidth"
    justifyContent="space-between"
    alignItems="center"
    padding="padAll"
  >
    <FlexContainer
      justifyContent="flex-start"
      alignItems="center"
    >
      <ItemSpacer height="auto">
        <Radio
          value="from-source"
          checked={!isCreateCustomRentRoll}
          onChange={updateIsCreateCustomRentRoll}
        />
      </ItemSpacer>
      <ItemSpacer>
        <Select
          width="100px"
          clearable={false}
          options={sources}
          onChange={updateSelectedSource}
          value={selectedSource}
        />
      </ItemSpacer>
    </FlexContainer>
    <FlexContainer
      justifyContent="flex-end"
      alignItems="center"
    >
      <ItemSpacer height="auto">
        <Text
          size="xsmall"
          color="grayLight"
          weight="semibold"
        >
          Compare with:
        </Text>
      </ItemSpacer>
      <ItemSpacer>
        <Select
          width="125px"
          clearable={false}
          placeholder="Select Source"
          options={sources}
          onChange={updateSelectedCompareSource}
          value={selectedCompareSource}
        />
      </ItemSpacer>
      <ItemSpacer>
        <Button
          theme="blue"
          onClick={handleCompareClick}
        >
          Compare
        </Button>
      </ItemSpacer>
    </FlexContainer>
  </FlexContainer>
);

RentRollFromDataHeader.propTypes = {
  handleCompareClick: PropTypes.func,
  isCreateCustomRentRoll: PropTypes.bool,
  selectedCompareSource: PropTypes.string,
  selectedSource: PropTypes.string,
  sources: PropTypes.array,
  type: PropTypes.string,
  updateIsCreateCustomRentRoll: PropTypes.func,
  updateSelectedCompareSource: PropTypes.func,
  updateSelectedSource: PropTypes.func,
};

export default RentRollFromDataHeader;
