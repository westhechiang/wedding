import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';
import sidebarBgDark from '../assets/images/background/sidebar-bg-dark.png';


const SidebarHeader = ({
  content,
}) => (
  <FlexContainer
    justifyContent="space-between"
    padding="padAll"
    backgroundColor="grayExtraDark"
    background={sidebarBgDark}
    height="80px"
    border="borderBottom"
  >
    <FlexContainer alignItems="center">
      <Text
        size="xlarge"
        color="white"
      >
        {content}
      </Text>
    </FlexContainer>
  </FlexContainer>
);

SidebarHeader.propTypes = {
  content: PropTypes.string,
};

export default SidebarHeader;
