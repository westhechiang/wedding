import styled from 'styled-components';

const VerticalItemSpacer = styled.div`
  width: ${props => props.width || '100%'};
  margin-bottom: ${props => (props.space || '10px')};
`;

export default VerticalItemSpacer;
