import styled from 'styled-components';
import { theme } from '../../ui';

const RefineListSection = styled.div`
  margin-top: 2px;
  padding: 10px 20px;
  background-color: ${theme.color.grayDark};
  width: 100%;
  display: block;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid ${theme.color.gray};
`;

export default RefineListSection;
