import React from 'react';

import PropTypes from 'prop-types';

import Image from './coreui/Image';
import ImageCover from './coreui/ImageCover';
import ItemSpacer from './coreui/ItemSpacer';
import RemoveImageButton from './coreui/RemoveImageButton';
import CircleIcon from './CircleIcon';

export const ImageGalleryPhoto = ({
  image,
  imageRemoveHandler,
  imageHover,
  imageNotHovering,
  hoveredImage,
  maxPhotoHeight,
  maxPhotoWidth,
  imageIsClicked,
}) => (
  <ItemSpacer

    key={image.src}
  >
    <RemoveImageButton
      hover
      isSelectedImage={image.src === hoveredImage}
    >
      <CircleIcon
        type="close"
        handleClick={() => { imageRemoveHandler(image.src); }}
        size="24px"
      />
    </RemoveImageButton>
    <ImageCover
      hover="showRemoveButton"
      key={image.id}
      height={maxPhotoHeight}
      width={maxPhotoWidth}
      showDeleteButton={hoveredImage === image.src}
      onMouseEnter={() => { imageHover(image.src); }}
      onMouseLeave={() => { imageNotHovering(image.src); }}
      onClick={() => { imageIsClicked(image.src); }}
    >
      <Image
        key={image.id}
        src={image.src}
        width="100%"
        objectFit="cover"
      />
    </ImageCover>
  </ItemSpacer>
);

ImageGalleryPhoto.propTypes = {
  image: PropTypes.object,
  imageRemoveHandler: PropTypes.func,
  imageHover: PropTypes.func,
  imageNotHovering: PropTypes.func,
  hoveredImage: PropTypes.string,
  maxPhotoHeight: PropTypes.string,
  maxPhotoWidth: PropTypes.string,
  imageIsClicked: PropTypes.func,
};

export default ImageGalleryPhoto;
