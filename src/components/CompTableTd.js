import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import StyledRouterNavLink from './coreui/StyledRouterNavLink';

const CompTableTd = ({ content, textAlign, weight, color, isLink, location }) => {
  const textAlignments = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    undefined: 'flex-end',
  };

  return (
    <FlexContainer
      alignItems="center"
      justifyContent={textAlignments[textAlign]}
      height="fullHeight"
      color={color || 'gray2'}
      weight={weight}
      size="xsmall"
    >
      {
        isLink ?
          <StyledRouterNavLink
            height="auto"
            type="noPad"
            textDecoration="underline"
            to={location}
          >
            {content}
          </StyledRouterNavLink> :
          content
      }
    </FlexContainer>
  );
};

CompTableTd.propTypes = {
  content: PropTypes.any,
  textAlign: PropTypes.string,
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
  color: PropTypes.string,
  isLink: PropTypes.bool,
  location: PropTypes.string,
};

export default CompTableTd;

