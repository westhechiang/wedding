import styled from 'styled-components';
import { theme } from '../../ui';

const Form = styled.form`
  padding: ${props => props.padding || theme.gutter};
  width: ${props => props.width || 'auto'};
`;

export default Form;
