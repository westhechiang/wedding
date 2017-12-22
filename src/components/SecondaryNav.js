import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import ItemSpacer from './coreui/ItemSpacer';
import PropertyProfile from './PropertyProfile';
import NavIcon from './NavIcon';
import NavBar from './coreui/NavBar';

const SecondaryNav = ({ id, subjectProperty }) => (
  <NavBar theme="bottom">
    <FlexContainer
      height="fullHeight"
      justifyContent="space-between"
      alignItems="center"
    >
      {Object.keys(subjectProperty).length > 0 ?
        <PropertyProfile property={subjectProperty} /> :
        <span />
      }
      <FlexContainer
        justifyContent="flex-end"
        alignItems="center"
      >
        <ItemSpacer>
          <NavIcon
            id={id}
            type="sizing"
          />
        </ItemSpacer>
        {/* <ItemSpacer><NavIcon type="termSheet" /></ItemSpacer>
        <ItemSpacer><NavIcon type="underwriting" /></ItemSpacer>
        <ItemSpacer><NavIcon type="closing" /></ItemSpacer>
        <ItemSpacer><NavIcon type="documents" /></ItemSpacer>
        <ItemSpacer><NavIcon type="timeline" /></ItemSpacer>
        <ItemSpacer><NavIcon type="export" /></ItemSpacer>
        <ItemSpacer><NavIcon type="publish" /></ItemSpacer> */}
      </FlexContainer>
    </FlexContainer>
  </NavBar>
);

SecondaryNav.propTypes = {
  id: PropTypes.string,
  subjectProperty: PropTypes.object,
};

export default SecondaryNav;

