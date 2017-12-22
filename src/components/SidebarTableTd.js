import React from 'react';
import PropTypes from 'prop-types';
import Text from './coreui/Text';

const SidebarTableTd = ({ content, handleClick }) => (
  <Text
    textAlign="right"
    size="xxsmall"
    color="white"
    onClick={handleClick}
  >
    {content}
  </Text>
);

SidebarTableTd.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleClick: PropTypes.func,
};

export default SidebarTableTd;
