import styled from 'styled-components';
import { theme } from '../../ui';

const top = `
  height: 58px;
  background: ${theme.color.blue8};
`;

const bottom = `
  height: 90px;
  background: linear-gradient(
    ${theme.color.white} 35%,
    ${theme.color.gray1} 100%
  );
  border-bottom: 1px solid ${theme.color.gray1};
`;

const sizing = `
  height: 50px;
  background: ${theme.color.white};
`;

const sizingMarket = `
  height: 48px;
  background: ${theme.color.white};
  border-bottom: 1px solid ${theme.color.gray1};
`;

const themes = {
  top,
  bottom,
  sizing,
  sizingMarket,
};

const NavBar = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 0 40px;
  position: relative;
  z-index: 1;
  ${props => themes[props.theme]};
`;

export default NavBar;
