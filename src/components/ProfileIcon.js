import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Circle from './coreui/Circle';
import Image from './coreui/Image';
import { theme } from '../ui';
import noProfileImage from '../assets/images/placeholder/noprofile.jpg';

const ProfileIcon = ({ profileImage }) => {
  const content = profileImage || noProfileImage;

  return (
    <FlexContainer
      height="fullHeight"
      alignItems="center"
    >
      <Circle size="30px" borderColor={theme.color.blueDark}>
        <Image width="30" height="30" type="contain" src={content} />
      </Circle>
    </FlexContainer>
  );
};

ProfileIcon.propTypes = {
  profileImage: PropTypes.string,
};

export default ProfileIcon;
