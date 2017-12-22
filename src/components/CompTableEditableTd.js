// FIXME: [WES] - This component was originally created specifically
// for the comp table in sizing/market/rent-comps. Since we've started
// using it everywhere else, we should rename it to something more generic
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import { getStrippedValue } from '../helpers';

import FlexContainer from './coreui/FlexContainer';
import TextInput from './coreui/TextInput';

import sizingFinancialsActions from '../sizingFinancials/actions';
import sizingPropertyRentRollActions from '../sizingPropertyRentRoll/actions';
import propertyDetailsActions from '../propertyDetails/actions';

const stringFormatColumns = ['title', 'assumptions'];

class CompTableEditableTd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.content,
      displayValue: props.format(props.content),
      isStringFormat: stringFormatColumns.includes(props.cellInfo.column.id),
      tableId: props.cellInfo.column.tableId,
      isPercentage: props.cellInfo.column.id.indexOf('percent') !== -1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.updateTableCell = this.updateTableCell.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.content,
      displayValue: nextProps.format(nextProps.content),
    });
  }

  updateTableCell() {
    const id = this.state.tableId;
    const tables = {
      // FIXME: [WES] - rentRoll should really be subjectPropertyCustomRentRoll
      rentRoll: this.props.updateCustomRentRoll,
      newPropertyCustomRentRoll: this.props.updateNewPropertyCustomRentRoll,
      rentalRevenues: this.props.updateFinancialsTableCell,
      otherRevenues: this.props.updateFinancialsTableCell,
      expenses: this.props.updateFinancialsTableCell,
    };
    const value = this.state.isPercentage ?
      this.state.displayValue / 100 :
      this.state.displayValue;

    tables[id](
      this.state.isStringFormat ? value : numeral(value).value(),
      this.props.cellInfo,
    );
  }

  handleClick() {
    setTimeout(() => this.setState({
      displayValue: this.state.isStringFormat ?
        this.input.value :
        getStrippedValue(this.input.value),
    }, this.selectAll()), 150);
  }

  selectAll() {
    setTimeout(() => this.input.select(), 50);
  }

  handleChange(e) {
    const displayValue = e.target.value;
    this.setState({
      displayValue,
    });
  }

  handleBlur() {
    this.updateTableCell();
    this.setState({
      displayValue: this.state.displayValue,
    });
  }

  render() {
    const { textAlign } = this.props;
    const { displayValue } = this.state;

    return (
      <FlexContainer
        alignItems="center"
        color="gray"
        height="fullHeight"
        justifyContent={textAlign === 'left' ? 'flex-start' : 'flex-end'}
        size="xsmall"
      >
        <TextInput
          innerRef={(input) => { this.input = input; }}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          onFocus={this.handleClick}
          onChange={this.handleChange}
          value={displayValue}
          textAlign={textAlign}
        />
      </FlexContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // FIXME: [WES] -this actionCreator actually updates the sizingPropertyRentRoll
  // (subject property rent roll). We should update the naming accordingly
  // i.e. updateSubjectPropertyCustomRentRoll
  updateCustomRentRoll: (value, cellInfo) => {
    dispatch(sizingPropertyRentRollActions.updateCustomRentRoll(value, cellInfo));
  },
  updateNewPropertyCustomRentRoll: (value, cellInfo) => {
    dispatch(propertyDetailsActions.updateNewPropertyCustomRentRoll(value, cellInfo));
  },
  updateFinancialsTableCell: (value, cellInfo) => {
    dispatch(sizingFinancialsActions.updateFinancialsTableCell(value, cellInfo));
  },
});

const mapStateToProps = state => ({
  state,
});

CompTableEditableTd.propTypes = {
  content: PropTypes.any,
  format: PropTypes.func,
  textAlign: PropTypes.string,
  cellInfo: PropTypes.object,
  updateCustomRentRoll: PropTypes.func,
  updateFinancialsTableCell: PropTypes.func,
  updateNewPropertyCustomRentRoll: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompTableEditableTd);

