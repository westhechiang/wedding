import styled from 'styled-components';
import { theme } from '../../ui';

const padding = {
  padTop: `${theme.gutter} 0 0 0`,
  padBottom: `0 0 ${theme.gutter} 0`,
  padTopBottom: `${theme.gutter} 0`,
  padLeft: `0 0 0 ${theme.gutter}`,
  padRight: `0 ${theme.gutter} 0 0`,
  padLeftRight: `0 ${theme.gutter}`,
  padLeftRightBottom: `0 ${theme.gutter} ${theme.gutter}`,
  padLeftRightTop: `${theme.gutter} ${theme.gutter} 0`,
  padAll: `${theme.gutter}`,
};

const background = (type, content) => {
  const types = {
    linear: `
      background: ${content},
    `,
    image: `
      background-image: url(${content});
      background-size: cover;
      background-repeat: no-repeat;
    `,
    undefined: 'transprent',
  };
  return types[type];
};

// FIXME: [WES] - heights should be removed and we should just pass in the exact
// height we want to use. Don't have time right now to go through our app and
// do a find and replace. #INTERNWORK
const heights = {
  fullHeight: '100%',
  fullVhMinusNav: 'calc(100vh - 246px)',
  fullHeightMinusNav: 'calc(100% - 246px)',
  fullVhMinusRefineListFooter: 'calc(100vh - 70px)',
  undefined: 'auto',
};

const width = {
  fullWidth: '100%',
  halfWidth: '50%',
  inherit: 'inherit',
  undefined: 'auto',
};

const FlexContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  display: ${props => props.display || 'flex'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  flex-direction: ${props => props.flexDirection};
  color: ${props => theme.color[props.color] || theme.color.gray2};
  position: ${props => (props.position || 'relative')};
  align-content: ${props => props.alignContent};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => width[props.width] || props.width};
  padding: ${props => padding[props.padding] || props.padding};
  border-radius: ${props => (props.borderRadius || 0)};
  margin: ${props => props.margin || 0};
  box-shadow: ${props => (props.boxShadow ? theme.shadow : 'none')};
  font-size: ${props => theme.font.size[props.size] || theme.font.size.default};
  font-family: ${theme.font.family};
  font-weight: ${props => theme.font.weight[props.weight] || theme.font.weight.medium};
  overflow-x: ${props => props.overflowX || 'visible'};
  overflow-y: ${props => props.overflowY || 'visible'};
  box-sizing: border-box;
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  z-index: ${props => props.zIndex || 'auto'};
  transform: ${props => props.transform || 'none'};
  transition: ${props => props.transition || 'all 0s 0s ease'};
  border: ${props => props.border || 'none'};
  ${props => background(props.backgroundType, props.background)}
  flex-shrink: ${props => props.flexShrink || 1};
  align-self: ${props => (props.alignSelf || 'auto')};
  height: ${props => heights[props.height] || props.height};
`;

export default FlexContainer;
