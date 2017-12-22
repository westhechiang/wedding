import styled from 'styled-components';
import { theme } from '../../ui';

const themes = {
  blueLine: `
    background: transparent;
    border: none;
    border-bottom: 1px solid ${theme.color.cyan4};
    color: ${theme.color.white};
    font-size: ${theme.font.large};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.color.cyan4};
      font-weight: ${theme.font.weight.light};
      font-family: ${theme.font.family};
      font-size: ${theme.font.large};
    }
  `,
  mapSearch: `
    background: ${theme.color.white};
    border: none;
    box-shadow: ${theme.shadow};
    color: ${theme.color.grayExtraDark};
    border-radius: 3px;

    &::placeholder {
      color: ${theme.color.grayExtraDark};
      font-family: ${theme.font.family};
      font-size: ${theme.font.small};
    }
  `,
  deals: `
    border-radius: ${theme.borderRadius};
    width: 300px;
    border: 1px solid ${theme.color.grayExtraLight};
    text-indent: 20px;
  `,
  refineList: `
    background: ${theme.color.grayExtraDark};
    box-shadow: inset 0 1px 2px 2px ${theme.color.grayExtraExtraDark};
    border: none;
    border-bottom: 1px solid ${theme.color.gray};
    height: 20px;
    border-radius: ${theme.borderRadius};
    color: ${theme.color.grayExtraLight};
    text-align: center;
    font-size: ${theme.font.xsmall};

    &::placeholder {
      color: ${theme.color.grayExtraLight};
      font-family: ${theme.font.family};
      font-size: ${theme.font.xsmall};
      font-weight: ${theme.font.weight.light};
    }
  `,
  dealDetails: `
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.color.grayExtraLight};
    width: 50%;
    text-align: right;
    background: ${theme.color.grayExtraExtraExtraLight};
  `,
};


const TextInput = styled.input.attrs({
  type: 'text',
})`
  box-sizing: border-box;
  font-family: ${theme.font.family};
  font-size: ${theme.font.small};
  font-weight: ${theme.font.weight.light};
  height: 30px;
  padding: 10px;
  width: 100%;
  display: ${props => props.display || 'inline'};
  text-align: ${props => props.textAlign || 'start'};
  ${props => themes[props.theme]}
`;

export default TextInput;
