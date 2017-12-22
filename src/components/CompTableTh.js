import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';

const CompTableTh = ({ content, textAlign }) => (
  <FlexContainer
    alignItems="flex-end"
    height="fullHeight"
  >
    <Text
      color="gray3"
      lineHeight="12px"
      letterSpacing="0.71px"
      size="xxxsmall"
      textAlign={textAlign}
      whiteSpace="normal"
      width="100%"
    >
      {content}
    </Text>
  </FlexContainer>
);

CompTableTh.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  textAlign: PropTypes.string,
};

export default CompTableTh;
