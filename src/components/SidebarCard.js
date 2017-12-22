import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import SidebarCardSubjectPropertyTable from './SidebarCardSubjectPropertyTable';
import SidebarCardCompPropertyTable from './SidebarCardCompPropertyTable';
import SidebarCardHeader from './SidebarCardHeader';
import sidebarBgLight from '../assets/images/background/sidebar-bg-light.png';

const SidebarCard = ({
  compCardSort,
  hideComp,
  isSelected,
  property,
  propertyType,
  sortComps,
  toggleSelectComp,
  showPropertyCardDetails,
}) => (
  <FlexContainer
    flexDirection="column"
    padding="padAll"
    border="borderTopBottom"
    background={sidebarBgLight}
  >
    <SidebarCardHeader
      property={property}
      propertyType={propertyType}
      toggleSelectComp={toggleSelectComp}
      hideComp={hideComp}
      isSelected={isSelected}
      showPropertyCardDetails={showPropertyCardDetails}
    />
    {/* FIXME: temporarily showing different table components since
      the data structure for subject property and comps are different.
      We might want to fix that */}
    { propertyType === 'subject' ?
      <div>
        <SidebarCardSubjectPropertyTable
          compCardSort={compCardSort}
          property={property}
          sortComps={sortComps}
        />
      </div> :
      <SidebarCardCompPropertyTable
        compCardSort={compCardSort}
        property={property}
        sortComps={sortComps}
      />
    }
  </FlexContainer>
);

SidebarCard.propTypes = {
  compCardSort: PropTypes.object,
  hideComp: PropTypes.func,
  isSelected: PropTypes.bool,
  property: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  propertyType: PropTypes.string,
  sortComps: PropTypes.func,
  showPropertyCardDetails: PropTypes.func,
  toggleSelectComp: PropTypes.func,
};

export default SidebarCard;
