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
      w={[1, 1, '1px']}
      my={[60, 60, 0]}
      bg="pink.1"
      height={['1px', '1px', desktopHeight]}
    />
  );
};

ResponsiveLine.propTypes = {
  desktopHeight: PropTypes.string,
};

ResponsiveLine.defaultProps = {
  desktopHeight: '350px',
};

export default ResponsiveLine;
