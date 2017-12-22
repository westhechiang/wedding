import React from 'react';
import FlexContainer from './coreui/FlexContainer';
import Image from './coreui/Image';
import ItemSpacer from './coreui/ItemSpacer';
import NavBar from './coreui/NavBar';
import ProfileIcon from './ProfileIcon';
import NavIcon from './NavIcon';
import logoImage from '../assets/images/branding/rm-logo.svg';
import tempProfileImage from '../assets/images/placeholder/jh.png';

const PrimaryNav = () => (
  <NavBar theme="top">
    <FlexContainer
      height="fullHeight"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image width="182" src={logoImage} />
      <FlexContainer
        alignItems="center"
        height="fullHeight"
        justifyContent="flex-end"
      >
        <ItemSpacer>
          <NavIcon
            height="55px"
            type="createDeal"
          />
        </ItemSpacer>
        <ItemSpacer>
          <NavIcon
            height="55px"
            type="deals"
          />
        </ItemSpacer>
        <ItemSpacer>
          <NavIcon
            height="55px"
            type="search"
          />
        </ItemSpacer>
        <ItemSpacer>
          <ProfileIcon
            profileImage={tempProfileImage}
          />
        </ItemSpacer>
      </FlexContainer>
    </FlexContainer>
  </NavBar>
);

export default PrimaryNav;

