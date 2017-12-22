import React from 'react';
import PropTypes from 'prop-types';
import SidebarContainer from './coreui/SidebarContainer';
import Container from './coreui/Container';
import FlexContainer from './coreui/FlexContainer';
import SidebarSection from './coreui/SidebarSection';
import RefineListSection from './coreui/RefineListSection';
import RefineListFooter from './RefineListFooter';
import Text from './coreui/Text';
import VerticalItemSpacer from './coreui/VerticalItemSpacer';
import RefineListMinMax from './RefineListMinMax';
import RefineListDateToFrom from './RefineListDateToFrom';
import RefineListRange from './RefineListRange';
import RefineListSources from './RefineListSources';
import ItemSpacer from './coreui/ItemSpacer';
import Button from './coreui/Button';
import Checkbox from './coreui/Checkbox';

const SidebarRefineList = ({
  adjustCompFilterCriteria,
  clearCompFiltersCriteria,
  criterias,
  refineCompFilter,
  refineListVisible,
  toggleHiddenComps,
}) => (
  <SidebarContainer
    height="calc(100vh - 246px)"
    width="300px"
    display={!refineListVisible && 'none'}
  >
    <SidebarSection height="calc(100% - 70px)" width="inherit">
      <FlexContainer
        width="inherit"
        height="fullHeight"
        flexDirection="column"
        padding="padAll"
        alignItems="center"
        backgroundColor="grayExtraExtraDark"
      >
        <Text color="white" margin="0 0 10px 0">Refine List</Text>
        {criterias &&
          <Container>
            <RefineListSources
              id="property_sources"
              title="SOURCE OF DATA"
              sources={criterias}
              adjustCompFilterCriteria={adjustCompFilterCriteria}
            />
            <RefineListRange
              id="property_year_built"
              title="YEAR BUILT"
              adjustCompFilterCriteria={adjustCompFilterCriteria}
              min={criterias.property_year_built_min}
              max={criterias.property_year_built_max}
            />
            <RefineListMinMax
              id="property_distance_from_subject_property"
              title="DISTANCE FROM SUBJECT PROPERTY (mi)"
              adjustCompFilterCriteria={adjustCompFilterCriteria}
              min={criterias.property_distance_from_subject_property_min}
              max={criterias.property_distance_from_subject_property_max}
            />
            <RefineListMinMax
              id="property_number_of_units"
              title="NUMBER OF UNITS"
              adjustCompFilterCriteria={adjustCompFilterCriteria}
              min={criterias.property_number_of_units_min}
              max={criterias.property_number_of_units_max}
            />
            {/* FIXME: This logic should be moved elsewhere */}
            {
              criterias.property_avg_rent_per_unit_min !== undefined &&
              <RefineListMinMax
                id="property_avg_rent_per_unit"
                title="AVERAGE RENT/UNIT"
                adjustCompFilterCriteria={adjustCompFilterCriteria}
                min={criterias.property_avg_rent_per_unit_min}
                max={criterias.property_avg_rent_per_unit_max}
                type="currency"
              />
            }
            {
              criterias.property_avg_rent_per_sq_ft_min !== undefined &&
              <RefineListMinMax
                id="property_avg_rent_per_sq_ft"
                title="AVERAGE RENT/SF"
                adjustCompFilterCriteria={adjustCompFilterCriteria}
                min={criterias.property_avg_rent_per_sq_ft_min}
                max={criterias.property_avg_rent_per_sq_ft_max}
                type="currencyWithCents"
              />
            }
            {
              criterias.property_occupancy_min !== undefined &&
              <RefineListMinMax
                id="property_occupancy"
                title="OCCUPANCY"
                adjustCompFilterCriteria={adjustCompFilterCriteria}
                min={criterias.property_occupancy_min}
                max={criterias.property_occupancy_max}
                type="percentage"
              />
            }
            {
              criterias.property_sales_date_min !== undefined &&
              <RefineListDateToFrom
                id="property_sales_date"
                title="SALES DATE"
                adjustCompFilterCriteria={adjustCompFilterCriteria}
                min={criterias.property_sales_date_min}
                max={criterias.property_sales_date_max}
              />
            }
            {
              criterias.property_price_per_unit_min !== undefined &&
              <RefineListMinMax
                id="property_price_per_unit"
                title="$/UNIT"
                adjustCompFilterCriteria={adjustCompFilterCriteria}
                min={criterias.property_price_per_unit_min}
                max={criterias.property_price_per_unit_max}
                type="currency"
              />
            }
            {
              criterias.property_cap_rate_min !== undefined &&
              <RefineListMinMax
                id="property_cap_rate"
                title="CAP RATE"
                adjustCompFilterCriteria={adjustCompFilterCriteria}
                min={criterias.property_cap_rate_min}
                max={criterias.property_cap_rate_max}
                type="percentage"
              />
            }

            <VerticalItemSpacer>
              <Text textAlign="center" color="white" size="xxsmall">
                COMP VISIBILITY
              </Text>
              <RefineListSection>
                <FlexContainer
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Checkbox
                    onChange={toggleHiddenComps}
                  />
                  <Text
                    color="white"
                    size="xsmall"
                  >
                    Show Hidden Comps
                  </Text>
                </FlexContainer>
              </RefineListSection>
            </VerticalItemSpacer>
          </Container>
        }
      </FlexContainer>
    </SidebarSection>
    <RefineListFooter>
      <FlexContainer
        alignItems="center"
        justifyContent="center"
        padding="padAll"
        width="fullWidth"
        backgroundColor="gray"
      >
        <ItemSpacer>
          <Button
            theme="gray"
            uppercase
            onClick={clearCompFiltersCriteria}
          >
            Clear Filters
          </Button>
        </ItemSpacer>
        <ItemSpacer>
          <Button
            theme="gray"
            onClick={refineCompFilter}
            uppercase
          >
            Apply Filters
          </Button>
        </ItemSpacer>
      </FlexContainer>
    </RefineListFooter>
  </SidebarContainer>
);

SidebarRefineList.propTypes = {
  adjustCompFilterCriteria: PropTypes.func,
  clearCompFiltersCriteria: PropTypes.func,
  criterias: PropTypes.object,
  refineCompFilter: PropTypes.func,
  refineListVisible: PropTypes.bool,
  toggleHiddenComps: PropTypes.func,
};

export default SidebarRefineList;
