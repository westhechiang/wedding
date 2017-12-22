import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './coreui/Overlay';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';

const OverlayWithContent = ({
  content,
}) => (
  <Overlay>
    <FlexContainer
      justifyContent="center"
      alignItems="center"
      width="fullWidth"
      height="fullHeight"
    >
      <Text
        color="white"
        size="xsmall"
      >
        {content}
      </Text>
    </FlexContainer>
  </Overlay>
);

OverlayWithContent.propTypes = {
  content: PropTypes.string,
};

export default OverlayWithContent;
