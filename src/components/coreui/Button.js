import styled from 'styled-components';
import { theme } from '../../ui';

const green = `
  background: ${theme.color.green};
  color: ${theme.color.white};
`;

const whiteBlue = `
  color: ${theme.color.blue4};
  background: ${theme.color.white};
  font-weight: ${theme.font.weight.semiBold};
  height: 60px;
  letter-spacing: 1px;
  line-height: 18px;
  font-size: ${theme.font.size.large};

  &:disabled {
    opacity: 0.3;
  }
`;

const whiteGray = `
  color: ${theme.color.grayLight};
  border: ${theme.border(theme.color.grayExtraLight)};
  background: ${theme.color.white};
`;

const dealDetails = `
  color: ${theme.color.blueExtraExtraLight};
  border: ${theme.border(theme.color.white)};
  background: ${theme.color.white};
  text-align: left;
  font-weight: ${theme.font.weight.medium};
`;

const blue = `
  background: ${theme.color.blueLight};
  color: ${theme.color.white};
  font-weight: ${theme.font.weight.medium};
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: ${theme.font.xxsmall};
`;

const gray = `
  background: ${theme.color.grayDark};
  background: linear-gradient(
    ${theme.color.gray} 0,
    ${theme.color.grayDark} 100%
  );
  color: ${theme.color.white};
  box-shadow: ${theme.shadow};
  font-weight: ${theme.font.weight.semiBold};
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: ${theme.font.xxsmall};
`;

const grayCondensed = `
  background: ${theme.color.grayDark};
  background: linear-gradient(
    ${theme.color.gray} 0,
    ${theme.color.grayDark} 100%
  );
  color: ${theme.color.white};
  box-shadow: ${theme.shadow};
  font-weight: ${theme.font.weight.medium};
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  font-size: ${theme.font.xxsmall};
`;

const tableFooterAddRow = `
  height: 30px;
  padding: 5px;
  line-height: 16px;
  box-sizing: border-box;
  background-color: ${theme.color.grayExtraExtraLight};
  color: ${theme.color.gray2};
  font-weight: ${theme.font.weight.semiBold};
  text-transform: uppercase;
  letter-spacing: 0.6;
  font-size: ${theme.font.xxsmall};
`;

const themes = {
  green,
  whiteBlue,
  whiteGray,
  dealDetails,
  blue,
  gray,
  grayCondensed,
  tableFooterAddRow,
};

const Button = styled.button`
  border-radius: ${theme.borderRadius};
  height: 40px;
  width: ${props => props.width || 'auto'};
  text-align: center;
  font-size: ${theme.font.small};
  font-family: ${theme.font.family};
  line-height: 40px;
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  padding: 0 ${theme.gutter};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  border: none;
  z-index: ${props => props.zIndex || 'auto'};
  position: ${props => props.position || 'static'};
  font-weight: ${theme.font.weight.light};
  transition: 0.2s ease-in-out opacity;
  ${props => themes[props.theme]};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
