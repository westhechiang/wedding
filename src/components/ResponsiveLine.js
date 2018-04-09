import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedBox,
} from 'www-coreui';

const ResponsiveLine = ({
  desktopHeight,
}) => {
  return (
    <ExtendedBox
      w={[0.8, 0.8, '1px']}
      my={[60, 60, 20]}
      bg="pink.1"
      height={['1px', '1px', desktopHeight]}
    />
  );
};

ResponsiveLine.propTypes = {
  desktopHeight: PropTypes.string,
};

ResponsiveLine.defaultProps = {
  desktopHeight: '400px',
};

export default ResponsiveLine;
