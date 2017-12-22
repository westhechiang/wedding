import styled from 'styled-components';
import { theme } from '../../ui';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  color: ${theme.color.black};
`;

export default Radio;
