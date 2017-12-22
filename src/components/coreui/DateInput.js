import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { theme } from '../../ui';

const themes = {
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
};

const DateInput = styled(DatePicker)`
  box-sizing: border-box;
  font-family: ${theme.font.family};
  font-size: ${theme.font.small};
  font-weight: ${theme.font.weight.light};
  height: 30px;
  padding: 10px;
  width: ${props => props.width || '100%'};
  ${props => themes[props.theme]}

  &.react-datepicker-popper {
    outline: 2px solid red;
  }

  .react-datepicker__day {
    width: 15px;
  }
`;

export default DateInput;
