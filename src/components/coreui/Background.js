import styled from 'styled-components';
import { theme } from '../../ui';

const Background = styled.div`
  width: 100%;
  height: ${props => props.height || '100%'};
  background: url(${props => props.content}) ${theme.color.black} no-repeat center center fixed;
  background-size: cover;
`;

export default Background;
