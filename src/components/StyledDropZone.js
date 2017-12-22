import React from 'react';
import styled from 'styled-components';
import DropZone from 'react-dropzone';

import theme from '../ui';

const StyledDropZone = styled(({
  hover,
  isEnabled,
  height,
  width,
  ...props
}) => (<DropZone {...props} />),
)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    border: none;
    background-color: ${theme.color.grayExtraExtraLight};
    color: ${theme.color.grayExtraLight};
    font-weight: ${theme.font.weight.heavy};
    &:hover {
        cursor: ${props => (props.isEnabled ? 'pointer' : 'not-allowed')};
    };
    &:hover * {
        cursor: ${props => (props.isEnabled ? 'pointer' : 'not-allowed')};
    };
`;


export default StyledDropZone;
