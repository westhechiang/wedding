import styled from 'styled-components';
import { theme } from '../../ui';

const FloatingTab = styled.div`
  position: absolute;
  border-radius: ${theme.borderRadius};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  z-index: ${props => props.zIndex || 'auto'};
  border: 1px solid ${theme.color.grayExtraExtraLight};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${props => theme.color[props.backgroundColor]};
  box-shadow: ${theme.shadow};
  transition: 0.2s ease-in-out right;
  justify-content: flex-start;
  display: flex;

  &:hover {
    cursor: pointer;
    right: 0;
  }
`;

export default FloatingTab;
