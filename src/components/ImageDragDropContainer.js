import React from 'react';
import PropTypes from 'prop-types';
import DragSortableList from 'react-drag-sortable';
import styled from 'styled-components';

import Image from './coreui/Image';
import ItemSpacer from './coreui/ItemSpacer';
import RemoveImageButton from './coreui/RemoveImageButton';
import ImageCover from './coreui/ImageCover';

import CircleIcon from './CircleIcon';

export const DragSortableListStyleWrapper = styled.div`
  .dragDropPhoto {
   margin-right: 10px;
  }
`;

export const ImageDragDropContainer = ({
  displayPhotoList,
  imageRemoveHandler,
  dropZone,
  movedPhoto,
  maxPhotoWidth,
  maxPhotoHeight,
}) => {
  const sortablePhotos = displayPhotoList.map(image => (
    <ItemSpacer
      position="relative"
      height="auto"
      key={image.src}
      imageUrl={image.src}
    >
      <ImageCover
        id={image.src}
        key={image.id}
        height={maxPhotoHeight}
        width={maxPhotoWidth}
      >
        <Image
          key={image.id}
          src={image.src}
          width="100%"
          objectFit="cover"
        />
        <RemoveImageButton
          hover
        >
          <CircleIcon
            type="close"
            handleClick={() => { imageRemoveHandler(image.src); }}
            size="24px"
          />
        </RemoveImageButton>
      </ImageCover>
    </ItemSpacer>
  ));

  const sortablePhotoList = sortablePhotos.map(
    listItem => ({
      isImage: true,
      src: listItem.props.imageUrl,
      content: listItem,
      classes: ['dragDropPhoto'],
    }),
  );

  const sortablePhotoListWithDropzone = [
    ...sortablePhotoList,
    {
      isImage: false,
      content: dropZone,
      classes: ['no-drag'],
    },
  ];

  const placeHolderStyle = { background: 'gray' };
  const placeHolder = (<div style={placeHolderStyle} />);
  return (
    <DragSortableListStyleWrapper>
      <DragSortableList
        items={sortablePhotoListWithDropzone}
        onSort={movedPhoto}
        placeholder={placeHolder}
        dropBackTransitionDuration={0.2}
        moveTransitionDuration={0.9}
        type="grid"
      />
    </DragSortableListStyleWrapper>
  );
};

ImageDragDropContainer.propTypes = {
  displayPhotoList: PropTypes.array,
  imageRemoveHandler: PropTypes.func,
  dropZone: PropTypes.object,
  movedPhoto: PropTypes.func,
  maxPhotoWidth: PropTypes.string,
  maxPhotoHeight: PropTypes.string,
};

export default ImageDragDropContainer;
