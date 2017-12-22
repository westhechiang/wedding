import styled from 'styled-components';

const RemoveImageButton = styled.div`
  transition: 0.2s ease-in-out opacity;
  opacity: ${props => (props.isSelectedImage ? 1 : 0)};
  display: block;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
  &:hover {
    cursor: pointer;

    // Highlight the close button
    > div {
      background-color: red;
      opacity: 0.8;
    };

  };

`;

export default RemoveImageButton;
