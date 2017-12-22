import styled from 'styled-components';
import { theme } from '../../ui';

const SearchListItem = styled.li`
  width: 100%;
  list-style-type: ${props => (props.bullets ? 'disc' : 'none')};
  margin-top: 5px;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.color.gray1};

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default SearchListItem;
