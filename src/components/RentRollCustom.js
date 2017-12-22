import React from 'react';
import PropTypes from 'prop-types';

import StyledReactTable from './coreui/StyledReactTable';
import FlexContainer from './coreui/FlexContainer';
import Button from './coreui/Button';

import CircleIcon from './CircleIcon';

class RentRollCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transformedCustomUnitsDetails: {
        data: [],
        columns: [],
      },
    };
    this.transform = this.transform.bind(this);
  }

  componentWillMount() {
    this.transform(this.props.customUnitsDetails);
  }

  componentWillReceiveProps(nextProps) {
    this.transform(nextProps.customUnitsDetails);
  }

  transform(customUnitsDetails) {
    const transformedCustomUnitsDetails = Object.keys(customUnitsDetails).reduce((obj, key) => (
      key === 'data' ?
      {
        ...obj,
        [key]: customUnitsDetails.data.map((d, index) => ({
          ...d,
          delete: (
            <CircleIcon
              type="minus"
              handleClick={() => this.props.removeRow(index)}
            />
          ),
        })),
      } :
      {
        ...obj,
        [key]: [...customUnitsDetails[key]],
      }
    ), {});
    this.setState({ transformedCustomUnitsDetails });
  }

  render() {
    const {
      addRow,
      isCreateCustomRentRoll,
      customUnitsDetails,
    } = this.props;
    const { transformedCustomUnitsDetails } = this.state;

    return isCreateCustomRentRoll && (
      <FlexContainer
        padding="padAll"
        flexShrink="0"
        flexDirection="column"
      >
        <StyledReactTable
          className="-striped -highlight"
          columns={customUnitsDetails.columns}
          data={transformedCustomUnitsDetails.data}
          pageSize={customUnitsDetails.data.length}
          resizable={false}
          showPagination={false}
          sortable
        />
        <Button
          theme="tableFooterAddRow"
          onClick={addRow}
        >
          + Add Row
        </Button>
      </FlexContainer>
    );
  }
}

RentRollCustom.propTypes = {
  isCreateCustomRentRoll: PropTypes.bool,
  addRow: PropTypes.func,
  removeRow: PropTypes.func,
  customUnitsDetails: PropTypes.object,
};

export default RentRollCustom;

