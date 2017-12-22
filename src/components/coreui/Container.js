import styled from 'styled-components';
import { theme } from '../../ui';

const border = {
  borderTopBottomGray5: `border-top: 1px solid ${theme.color.gray5}; border-bottom: 1px solid ${theme.color.gray5};`,
};

const Container = styled.div`
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  display: ${props => props.display || 'block'};
  position: relative;
  box-sizing: border-box;
  background-color: ${props => theme.color[props.backgroundColor] || 'none'};
  padding: ${props => props.padding || 0};
  ${props => border[props.border]}
  overflow-x: ${props => props.overflowX || 'visible'};
`;

export default Container;
