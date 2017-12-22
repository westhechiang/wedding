import styled from 'styled-components';

const Image = styled.img`
  display: block;
  padding: ${props => props.padding};
  margin: ${props => props.margin || 0};
  position: ${props => props.position || 'static'};
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  object-fit: ${props => props.objectFit || 'fit'};
  transition: ${props => props.transition || 'all 0s 0s ease'};
  z-index: ${props => props.zIndex || 'auto'};
  transform: ${props => props.transform || 'none'};

  &:hover {
    cursor: ${props => (props.hover ? 'pointer' : 'auto')}
  }
`;

export default Image;
