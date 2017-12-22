import styled from 'styled-components';
import { theme } from '../../ui';

const hoverEffects = {
  boldFont: `&:hover{ font-weight: ${theme.font.weight.heavy}; }`,
};

const Text = styled.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => theme.color[props.color]};
  font-size: ${props => theme.font.size[props.size] || theme.font.size.default};
  font-family: ${theme.font.family};
  font-weight: ${props => theme.font.weight[props.weight] || 'normal'};
  line-height: ${props => props.lineHeight || theme.font[props.size]};
  text-indent: ${props => props.textIndent};
  text-align: ${props => (props.textAlign || 'start')};
  text-transform: ${props => (props.textTransform || 'none')};
  margin: ${props => (props.margin || 0)};
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  position: ${props => (props.position || 'relative')};
  top: ${props => (props.top || 'auto')};
  padding: ${props => (props.padding || '0')};
  white-space: ${props => props.whiteSpace || 'normal'};
  width: ${props => props.width || 'auto'};
  flex-wrap: ${props => props.flexWrap || 'auto'};
  display: ${props => props.display || 'inline'};
  opacity: ${props => props.opacity || '1'};
  ${props => hoverEffects[props.hover]}
`;

export default Text;
