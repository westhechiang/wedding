import React from 'react';
import PropTypes from 'prop-types';
import StyledRouterNavLink from './coreui/StyledRouterNavLink';
import Text from './coreui/Text';
import FlexContainer from './coreui/FlexContainer';

const NavIcon = ({
  type,
  height,
  width,
  id,
}) => {
  const icons = {
    compsAppSizing: {
      label: 'Sizing',
      path: `/${id}/compsapp/sizing`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    compsAppSizingMarket: {
      label: 'Market',
      path: `/${id}/compsapp/sizing/market`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    compsAppSizingMarketSales: {
      label: 'Sales Comps',
      path: `/${id}/compsapp/sizing/market/sales`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    compsAppSizingMarketRent: {
      label: 'Rent Comps',
      path: `/${id}/compsapp/sizing/market/rent`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    createDeal: {
      label: 'CREATE DEAL',
      path: '/create-deal',
      props: {
        color: 'white',
        weight: 'semiBold',
        size: 'small',
        letterSpacing: '0.5px',
        lineHeight: '14px',
      },
      activeStyle: 'primaryNav',
      hoverStyle: 'primaryNav',
    },
    deals: {
      label: 'DEALS',
      path: '/deals',
      color: 'white',
      props: {
        color: 'white',
        weight: 'semiBold',
        size: 'small',
        letterSpacing: '0.5px',
        lineHeight: '14px',
      },
      activeStyle: 'primaryNav',
      hoverStyle: 'primaryNav',
    },
    search: {
      label: 'SEARCH',
      path: '/search',
      color: 'white',
      props: {
        color: 'white',
        weight: 'semiBold',
        size: 'small',
        letterSpacing: '0.5px',
        lineHeight: '14px',
      },
      activeStyle: 'primaryNav',
      hoverStyle: 'primaryNav',
    },
    sizing: {
      label: 'Sizing',
      path: `/${id}/sizing`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingMarket: {
      label: 'Market',
      path: `/${id}/sizing/market`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingMarketMarketOverview: {
      label: 'Market Overview',
      path: `/${id}/sizing/market/market-overview`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingMarketDemographics: {
      label: 'Demographics',
      path: `/${id}/sizing/market/demographics`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingMarketSales: {
      label: 'Sales Comps',
      path: `/${id}/sizing/market/sales`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingMarketRent: {
      label: 'Rent Comps',
      path: `/${id}/sizing/market/rent`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingProperty: {
      label: 'Property',
      path: `/${id}/sizing/property`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingPropertyPropertyInfo: {
      label: 'Property Info',
      path: `/${id}/sizing/property/property-info`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingPropertyRentRoll: {
      label: 'Rent Roll',
      path: `/${id}/sizing/property/rent-roll`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingRealEstateCompany: {
      label: 'Real Estate Company',
      path: `/${id}/sizing/real-estate-company`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingDeal: {
      label: 'Deal',
      path: `/${id}/sizing/deal`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingFinancials: {
      label: 'Financials',
      path: `/${id}/sizing/financials`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    sizingFinancialsAsIsFinancials: {
      label: 'As Is Financials',
      path: `/${id}/sizing/financials`,
      props: {
        color: 'white',
        size: 'medium',
        weight: 'normal',
        textAlign: 'center',
      },
      activeStyle: 'borderBottomFinancialsSidebar',
      hoverStyle: 'borderBottomFinancialsSidebar',
    },
    sizingFinancialsCreateAFinancialScenario: {
      label: 'Create a Financial Scenario',
      path: `/${id}/sizing/financials/create`,
      props: {
        color: 'gray4',
        size: 'medium',
        weight: 'normal',
        textAlign: 'center',
      },
      activeStyle: 'borderBottomFinancialsSidebar',
      hoverStyle: 'borderBottomFinancialsSidebar',
    },
    sizingFinancialsSavedFinancialScenarios: {
      label: 'Saved Financial Scenarios',
      path: `/${id}/sizing/financials/saved`,
      props: {
        color: 'gray4',
        size: 'medium',
        weight: 'normal',
        textAlign: 'center',
      },
      activeStyle: 'borderBottomFinancialsSidebar',
      hoverStyle: 'borderBottomFinancialsSidebar',
    },
    termSheet: {
      label: 'Term Sheet',
      path: `/${id}/term-sheet`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    underwriting: {
      label: 'Underwriting',
      path: `/${id}/Underwriting`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    closing: {
      label: 'Closing',
      path: `/${id}/closing`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    documents: {
      label: 'Documents',
      path: `/${id}/documents`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    timeline: {
      label: 'Timeline',
      path: `/${id}/timeline`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    export: {
      label: 'Export',
      path: `/${id}/export`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
    publish: {
      label: 'Publish',
      path: `/${id}/publish`,
      props: {
        color: 'gray4',
        weight: 'normal',
        size: 'medium',
      },
      activeStyle: 'tertiaryNav',
      hoverStyle: 'tertiaryNav',
    },
  };

  return (
    <StyledRouterNavLink
      height={height}
      width={width}
      to={icons[type].path}
      data-activestyle={icons[type].activeStyle}
      data-hoverstyle={icons[type].hoverStyle}
    >
      <FlexContainer
        height="fullHeight"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          {...icons[type].props}
        >{icons[type].label}</Text>
      </FlexContainer>
    </StyledRouterNavLink>
  );
};

NavIcon.propTypes = {
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  id: PropTypes.string,
};

export default NavIcon;
