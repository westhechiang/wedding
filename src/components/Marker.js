import React from 'react';
import PropTypes from 'prop-types';
import Image from './coreui/Image';
import subjectPropertyMarkerWithShadow from '../assets/images/icons/subject-property-marker-with-shadow.svg';
import propertyMarkerWithShadow from '../assets/images/icons/property-marker-with-shadow.svg';
import selectedPropertyMarkerWithShadow from '../assets/images/icons/selected-property-marker-with-shadow.svg';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';

const types = {
  subjectPropertyMarkerWithShadow,
  propertyMarkerWithShadow,
  selectedPropertyMarkerWithShadow,
};

const Marker = ({ type, content }) => (
  <FlexContainer justifyContent="center" alignItems="center ">
    <Image width="30" src={types[type]} />
    <Text size="xsmall" top="10px" position="absolute" color="white">{ content }</Text>
  </FlexContainer>
);

Marker.propTypes = {
  type: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Marker;
