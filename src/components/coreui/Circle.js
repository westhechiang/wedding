import styled from 'styled-components';
import { theme } from '../../ui';

const Circle = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50%;
  border: ${props => (props.borderColor ? theme.border(props.borderColor) : 'none')};
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  ${props => (props.hover ? '&:hover { cursor: pointer; }' : '')}
  ${props => (props.active ? `&:active { background-color: ${theme.color.grayDark}; }` : '')}
`;

export default Circle;
