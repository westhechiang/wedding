import styled from 'styled-components';
import { theme } from '../../ui';

const TransparentSection = styled.div`
  background: ${theme.color.blueTransparent};
  border-radius: ${theme.borderRadius};
  min-width: 550px;
  width: ${props => props.width || 'auto'};
  padding: ${theme.gutter};
  display: block;
  position: ${props => props.position || 'static'};
`;

export default TransparentSection;
