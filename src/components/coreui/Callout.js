import styled from 'styled-components';
import { theme } from '../../ui';

const Callout = styled.div`
  display: flex;
  background-color: ${theme.color.grayExtraExtraExtraLight};
  flex-direction: column;
  border: 1px solid ${theme.color.grayExtraExtraLight};
  width: ${props => props.width || 'auto'};
  height: 210px;
  box-sizing: border-box;
  padding: 20px;
`;

export default Callout;
