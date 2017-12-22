import React from 'react';
import PropTypes from 'prop-types';
import Text from './coreui/Text';

const CompTableTheadGroupTh = ({ content }) => (
  <Text
    color="gray3"
    size="xxsmall"
    textAlign="center"
    whiteSpace="nowrap"
    weight="semiBold"
  >
    {content}
  </Text>
);

CompTableTheadGroupTh.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CompTableTheadGroupTh;

