// Masks image it wraps
import styled from 'styled-components';

import { theme } from '../../ui';

const ImageCover = styled.div`
  display: flex;
  position: relative;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  margin-bottom: 10px;
  align-content: ${props => props.alignContent};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  color: ${props => theme.color[props.color] || theme.color.black};
  background-color: ${props => theme.color[props.backgroundColor] || 'transparent'};

  &:hover {
    cursor: pointer;
    // TODO: should really be selecting the RemoveButton directly
    div:last-child { opacity: 0.9 };
  };


`;

export default ImageCover;
