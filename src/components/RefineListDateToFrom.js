import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ItemSpacer from './coreui/ItemSpacer';
import RefineListSection from './coreui/RefineListSection';
import Text from './coreui/Text';
import DateInput from './coreui/DateInput';
import VerticalItemSpacer from './coreui/VerticalItemSpacer';
import FlexContainer from './coreui/FlexContainer';

class RefineListDateToFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        min: props.min,
        max: props.max,
      },
      displayValue: {
        min: moment(props.min),
        max: moment(props.max),
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, date) {
    const newState = { ...this.state };
    if (id.indexOf('min') !== -1) {
      newState.value.min = date.toJSON();
      newState.displayValue.min = date;
    } else {
      newState.value.max = date.toJSON();
      newState.displayValue.max = date;
    }
    this.setState(newState);
    Object.keys(this.state.value).forEach((key) => {
      this.props.adjustCompFilterCriteria(
        `${this.props.id}_${key}`,
        this.state.value[key],
      );
    });
  }

  render() {
    const { title, id } = this.props;
    const { displayValue } = this.state;

    return (
      <VerticalItemSpacer space="15px">
        <Text
          textAlign="center"
          color="white"
          size="xxsmall"
        >
          {title}
        </Text>
        <RefineListSection>
          <FlexContainer
            width="fullWidth"
            alignItems="center"
            justifyContent="center"
          >
            <ItemSpacer>
              <DateInput
                onChange={date => this.handleChange(`${id}-min`, date)}
                id={`${id}-min`}
                theme="refineList"
                selected={displayValue.min}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                withPortal
              />
            </ItemSpacer>
            <ItemSpacer>
              <Text color="white">–</Text>
            </ItemSpacer>
            <ItemSpacer>
              <DateInput
                onChange={date => this.handleChange(`${id}-max`, date)}
                id={`${id}-max`}
                theme="refineList"
                selected={displayValue.max}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                withPortal
              />
            </ItemSpacer>
          </FlexContainer>
        </RefineListSection>
      </VerticalItemSpacer>
    );
  }
}

RefineListDateToFrom.propTypes = {
  title: PropTypes.string,
  min: PropTypes.any,
  max: PropTypes.any,
  id: PropTypes.string,
  adjustCompFilterCriteria: PropTypes.func,
};

export default RefineListDateToFrom;
