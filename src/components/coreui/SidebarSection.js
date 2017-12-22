import styled from 'styled-components';

const width = {
  fullWidth: '100%',
  inherit: 'inherit',
  undefined: 'auto',
};

const SidebarSection = styled.div`
  height: ${props => props.height || 'auto'};
  width: ${props => width[props.width]};
  display: flex;
  overflow-y: ${props => props.overflowY || 'auto'};
  overflow-x: hidden;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export default SidebarSection;
