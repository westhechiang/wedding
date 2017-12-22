import styled from 'styled-components';
import { theme } from '../../ui';

const sizes = {
  large: theme.font.large,
  base: theme.font.base,
  small: theme.font.small,
  xsmall: theme.font.xsmall,
  xxsmall: theme.font.xxsmall,
  xxxsmall: theme.font.xxxsmall,
};

const weights = {
  light: theme.font.weight.light,
  undefined: theme.font.weight.medium,
};

const hoverEffects = {
  boldFont: `font-weight: ${theme.font.weight.semiBold};`,
};

const TextLink = styled.a`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => theme.color[props.color]};
  font-size: ${props => sizes[props.size]};
  font-family: ${theme.font.family};
  font-weight: ${props => weights[props.weight]};
  line-height: ${props => sizes[props.size]};
  text-indent: ${props => props.textIndent};
  text-align: ${props => (props.textAlign || 'start')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  margin: ${props => (props.margin || 0)};
  position: ${props => (props.position || 'relative')};
  top: ${props => (props.top || 'auto')};
  padding: ${props => (props.padding || '0')};
  opacity: ${props => props.opacity || '1'};
  white-space: ${props => props.whiteSpace || 'normal'};
  overflow: ${props => props.overflow || 'visible'};
  text-overflow: ${props => props.textOverflow || 'clip'};

  &:hover {
    cursor: pointer;
    ${props => hoverEffects[props.hover]}
  }
`;

export default TextLink;
