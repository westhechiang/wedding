import styled from 'styled-components';

const ItemSpacer = styled.div`
  height: ${props => props.height || '100%'};
  width: ${props => props.width || 'auto'};
  margin-right: ${props => (props.space || '10px')};
  position: ${props => (props.position || 'relative')};
  &:last-child {
    margin-right: 0;
  }
`;

export default ItemSpacer;
