import styled from 'styled-components';

const MapSearchContainer = styled.div`
  height: auto;
  width: ${props => (props.active ? '70%' : '50%')};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  transition: .2s ease-in-out width;
`;

export default MapSearchContainer;
