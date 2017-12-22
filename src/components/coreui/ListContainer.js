import styled from 'styled-components';
import { theme } from '../../ui';

const ListContainer = styled.ul`
  width: ${props => props.width || 'auto'};
  background-color: ${props => theme.color[props.backgroundColor] || 'transparent'};
  max-height: 450px;
  overflow-y: auto;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export default ListContainer;
