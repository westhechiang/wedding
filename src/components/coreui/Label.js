import styled from 'styled-components';
import { theme } from '../../ui';

const themes = {
  blueLine: `
    color: ${theme.color.cyan4};
    font-size: ${theme.font.xsmall};
    font-weight: ${theme.font.weight.light};
    text-indent: 10px;
  `,
};

const Label = styled.label`
  color: ${props => theme.color[props.color] || theme.color.black};
  font-size: ${props => theme.font[props.size] || theme.font.base};
  font-family: ${theme.font.family};
  font-weight: ${props => theme.font.weight[props.weight] || theme.font.weight.light};
  ${props => themes[props.theme]}
`;

export default Label;
