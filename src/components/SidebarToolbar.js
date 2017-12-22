import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';
import TextLink from './coreui/TextLink';
import Select from './coreui/Select';
import ItemSpacer from './coreui/ItemSpacer';

import sidebarBgLight from '../assets/images/background/sidebar-bg-light.png';

const SidebarToolbar = ({
  showAddNewProperty,
  sortOptions,
  selectedSort,
}) => (
  <FlexContainer
    justifyContent="space-between"
    padding="padAll"
    background={sidebarBgLight}
    border="borderBottom"
  >
    <FlexContainer
      alignItems="center"
      justifyContent="flex-start"
    >
      <ItemSpacer height="auto">
        <Text
          color="grayExtraLight"
          size="xxsmall"
        >
          SORT:
        </Text>
      </ItemSpacer>
      <ItemSpacer height="auto">
        <Select
          value={selectedSort}
          options={sortOptions}
          width="100px"
          clearable={false}
          theme="sidebar"
        />
      </ItemSpacer>
    </FlexContainer>
    <FlexContainer
      alignItems="center"
      justifyContent="flex-end"
    >
      <TextLink
        color="grayExtraLight"
        size="xsmall"
        onClick={showAddNewProperty}
      >
        Add Property
      </TextLink>
    </FlexContainer>
  </FlexContainer>
);

SidebarToolbar.propTypes = {
  showAddNewProperty: PropTypes.func,
  sortOptions: PropTypes.array,
  selectedSort: PropTypes.string,
};

export default SidebarToolbar;
