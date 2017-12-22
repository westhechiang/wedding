import React from 'react';
import { theme } from '../ui';
import Circle from './coreui/Circle';
import propertyIcon from '../assets/images/icons/property-icon.svg';
import Image from './coreui/Image';

const PropertyProfileIcon = () => (
  <Circle
    size="50px"
    textAlign="center"
    backgroundColor={theme.color.grayExtraLight}
  >
    <Image width="34" height="28" src={propertyIcon} />
  </Circle>
);

export default PropertyProfileIcon;
