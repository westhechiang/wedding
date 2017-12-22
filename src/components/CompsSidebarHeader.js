import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Button from './coreui/Button';
import Text from './coreui/Text';
import ItemSpacer from './coreui/ItemSpacer';
import sidebarBgDark from '../assets/images/background/sidebar-bg-dark.png';

const CompsSidebarHeader = ({
  numberOfProperties,
  toggleRefineList,
  refineListVisible,
}) => (
  <FlexContainer
    justifyContent="space-between"
    padding="padAll"
    backgroundColor="grayExtraDark"
    background={sidebarBgDark}
    border="borderBottom"
  >
    <FlexContainer
      alignItems="center"
      position="relative"
    >
      <Text
        textIndent="40px"
        color="white"
      >
        {numberOfProperties} Comp{((numberOfProperties > 1 || numberOfProperties === 0) ? 's' : '')}
      </Text>
    </FlexContainer>
    <FlexContainer>
      <ItemSpacer>
        <Button
          onClick={toggleRefineList}
          uppercase
          theme="gray"
        >
          {refineListVisible ? '–' : '+'} Refine List
        </Button>
      </ItemSpacer>
    </FlexContainer>
  </FlexContainer>
);

CompsSidebarHeader.propTypes = {
  numberOfProperties: PropTypes.number,
  toggleRefineList: PropTypes.func,
  refineListVisible: PropTypes.bool,
};

export default CompsSidebarHeader;
