import styled from 'styled-components';
import { theme } from '../../ui';

const Loader = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  left: -20px;
  top: 40px;
  background-color: ${theme.color.blueDark};
  border-radius: 50%;
  animation: move 4s infinite cubic-bezier(.2,.64,.81,.23);
  .spinner div:nth-child(2) {
    animation-delay: 150ms;
  }
  .spinner div:nth-child(3) {
    animation-delay: 300ms;
  }
  .spinner div:nth-child(4) {
    animation-delay: 450ms;
  }
  @keyframes move {
    0% {left: 0%;}
    75% {left:100%;}
    100% {left:100%;}
  }
`;

export default Loader;
