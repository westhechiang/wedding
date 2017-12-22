import styled from 'styled-components';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import {
  theme,
} from '../../ui';

const StyledMediumEditor = styled(Editor)`
  border: 1px solid ${theme.color.grayExtraLight};
  border-radius: ${theme.borderRadius};
  background: ${theme.color.grayExtraExtraExtraLight};
  padding: 10px;
  width: 100%;
  font-family: ${theme.font.family};
  font-size: ${theme.font.small};

  &.medium-editor-element {
    min-height: 150px;
  }

  p {
    margin: 0;
    font-family: ${theme.font.family};
    font-size: ${theme.font.small};
  }
`;

export default StyledMediumEditor;
