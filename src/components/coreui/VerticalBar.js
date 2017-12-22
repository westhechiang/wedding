import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { theme } from '../../ui';

const VerticalBar = ({ className }) => <span className={className}>|</span>;

const sizes = {
  xsmall: theme.font.xsmall,
  xxsmall: theme.font.xxsmall,
};

const StyledVerticalBar = styled(VerticalBar)`
  color: ${theme.color.white};
  font-family: ${theme.font.family};
  font-size: ${props => sizes[props.size]};
`;

VerticalBar.propTypes = {
  className: PropTypes.string,
};

export default StyledVerticalBar;
