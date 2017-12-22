import React from 'react';
import PropTypes from 'prop-types';
import Text from './coreui/Text';

const PageHeader = ({ content, size, weight }) => (
  <Text
    size={size}
    weight={weight}
    color="blue"
  >
    {content}
  </Text>
);

PageHeader.propTypes = {
  content: PropTypes.string,
  size: PropTypes.oneOf([
    'xxxsmall',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'default',
    'large',
    'xlarge',
    'xxlarge',
    'xxxlarge',
  ]),
  weight: PropTypes.oneOf([
    'thin',
    'extraLight',
    'light',
    'normal',
    'medium',
    'semiBold',
    'bold',
    'extraBold',
    'heavy',
  ]),
};

export default PageHeader;
