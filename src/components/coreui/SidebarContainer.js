import styled from 'styled-components';
import { theme } from '../../ui';
import sidebarBgLight from '../../assets/images/background/sidebar-bg-light.png';

const SidebarContainer = styled.div`
  width: ${props => (props.width || 'auto')};
  box-sizing: border-box;
  max-height: 100vh;
  overflow-y: ${props => props.overflowY || 'auto'};
  overflow-x: hidden;
  position: relative;
  display: ${props => props.display || 'block'};
  height: ${props => (props.height || 'auto')};
  background-image: url(${sidebarBgLight});
  background-repeat: repeat;
  background-size: 75px;
  box-shadow: ${theme.shadow};
`;

export default SidebarContainer;
