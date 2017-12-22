import styled from 'styled-components';
import { theme } from '../../ui';

const Overlay = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  position: ${props => props.position || 'absolute'};
  left: ${props => props.left || '0'};
  top: ${props => props.top || '0'};
  background: ${props => theme.color[props.backgroundColor] || theme.color.black};
  opacity: ${props => props.opacity || 0.8};
  z-index: ${props => props.zIndex || 1};
  transition: 1s ease-in-out opacity;
`;

export default Overlay;
