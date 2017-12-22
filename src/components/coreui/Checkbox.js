import styled from 'styled-components';
import { theme } from '../../ui';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  color: ${theme.color.white};
  background: transparent;
  margin: 0 5px 0 0;
`;

export default Checkbox;
