import React from 'react';
import PropTypes from 'prop-types';
import Marker from './Marker';

const SidebarCardHeaderMarker = ({
  propertyType,
  isSelected,
  markerLabel,
}) => {
  if (propertyType === 'subject') {
    return (
      <Marker
        type="subjectPropertyMarkerWithShadow"
        content=""
      />
    );
  }
  return (
    <Marker
      type={isSelected ?
        'selectedPropertyMarkerWithShadow' :
        'propertyMarkerWithShadow'}
      content={markerLabel}
    />
  );
};

SidebarCardHeaderMarker.propTypes = {
  propertyType: PropTypes.string,
  isSelected: PropTypes.bool,
  markerLabel: PropTypes.string,
};

export default SidebarCardHeaderMarker;
