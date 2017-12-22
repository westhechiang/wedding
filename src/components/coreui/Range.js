import styled from 'styled-components';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { theme } from '../../ui';

const StyledRange = styled(Range)`
  .rc-slider-rail {
    background-color: ${theme.color.grayExtraExtraDark};
  }

  .rc-slider-handle {
    height: 20px;
    width: 20px;
    margin-top: -8px;
    margin-left: -10px;
    border: none;
    background-color: ${theme.color.blueExtraLight};
    background: linear-gradient(
      ${theme.color.blueExtraLight} 0,
      ${theme.color.blueExtraExtraLight} 100%
    );
  }

  .rc-slider-track {
    background-color: #15C0F1;
  }
`;

export default StyledRange;
