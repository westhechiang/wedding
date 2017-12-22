import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../ui';

const types = {
  noPad: `
    padding: 0;
    min-width: 0;
  `,
  undefined: `
    padding: 0 10px;
  `,
};

const hoverStyles = {
  tertiaryNav: `
    border-bottom: 3px ${theme.color.blue} solid;

    p {
      color: ${theme.color.blue4};
    }
  `,
  primaryNav: `
    border-bottom: 3px ${theme.color.cyan4} solid;

    p {
      color: ${theme.color.white};
    }
  `,
  borderBottomFinancialsSidebar: `
    border-bottom: 1px ${theme.color.white} solid;
  `,
};

const activeStyles = {
  tertiaryNav: `
    border-bottom: 3px ${theme.color.blue} solid;

    p {
      color: ${theme.color.blue4};
    }
  `,
  borderBottomFinancialsSidebar: `
    border-bottom: 1px ${theme.color.white} solid;
  `,
  primaryNav: `
    border-bottom: 3px ${theme.color.cyan4} solid;
  `,
  darkBlueBackground: `
    background-color: ${theme.color.blueDark};
  `,
};

const StyledRouterNavLink = styled(NavLink)`
  text-decoration: ${props => props.textDecoration || 'none'};
  height: ${props => (props.height || '85px')};
  width: ${props => (props.width || 'auto')};
  color: ${theme.color.cyan4};
  min-width: 50px;
  display: block;
  ${props => types[props.type]}

  &.active {
    ${props => activeStyles[props['data-activestyle']]}
  }

  &:hover {
    ${props => hoverStyles[props['data-hoverstyle']]}
  }
`;

export default StyledRouterNavLink;
