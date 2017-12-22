import React from 'react';
import PropTypes from 'prop-types';
import ItemSpacer from './coreui/ItemSpacer';
import RefineListSection from './coreui/RefineListSection';
import Text from './coreui/Text';
import TextInput from './coreui/TextInput';
import VerticalItemSpacer from './coreui/VerticalItemSpacer';
import FlexContainer from './coreui/FlexContainer';
import { asPercentage, asCurrency, asCurrencyWithCents } from '../helpers';

class RefineListMinMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        min: props.min,
        max: props.max,
      },
      displayValue: {
        min: this.format(props.min),
        max: this.format(props.max),
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.format = this.format.bind(this);
  }

  format(value) {
    const formats = {
      percentage: asPercentage(value),
      currency: asCurrency(value),
      currencyWithCents: asCurrencyWithCents(value),
      date: value,
      undefined: value,
    };
    return formats[this.props.type];
  }

  handleChange(e) {
    const displayValue = e.target.value;
    let strippedValue = parseFloat(displayValue.replace(/[^0-9-.]/g, ''));
    if (this.props.type === 'percentage') {
      strippedValue /= 100;
    }
    const newState = { ...this.state };
    if (e.target.id.indexOf('min') !== -1) {
      newState.displayValue.min = displayValue;
      newState.value.min = strippedValue;
      this.setState(newState);
    } else {
      newState.displayValue.max = displayValue;
      newState.value.max = strippedValue;
      this.setState(newState);
    }
  }

  handleBlur(e) {
    let elementValue = e.target.value;
    const newState = { ...this.state };
    if (this.props.type === 'percentage') {
      elementValue /= 100;
    }
    elementValue = elementValue || 0;
    elementValue = this.format(elementValue);

    if (e.target.id.indexOf('min') !== -1) {
      newState.displayValue.min = elementValue;
      this.setState(newState);
    } else {
      newState.displayValue.max = elementValue;
      this.setState(newState);
    }

    Object.keys(this.state.value).forEach((key) => {
      this.props.adjustCompFilterCriteria(`${this.props.id}_${key}`, this.state.value[key]);
    });
  }

  handleFocus(e) {
    const elementValue = e.target.value;
    const newState = { ...this.state };
    const strippedValue = parseFloat(elementValue.replace(/[^0-9-.]/g, ''));
    const displayValue = strippedValue !== 0 ? strippedValue : '';

    if (e.target.id.indexOf('min') !== -1) {
      newState.displayValue.min = displayValue;
      this.setState(newState);
    } else {
      newState.displayValue.max = displayValue;
      this.setState(newState);
    }
  }

  render() {
    const { title, id } = this.props;
    const { displayValue } = this.state;

    return (
      <VerticalItemSpacer space="15px">
        <Text textAlign="center" color="white" size="xxsmall">{title}</Text>
        <RefineListSection>
          <FlexContainer
            width="fullWidth"
            alignItems="center"
            justifyContent="center"
          >
            <ItemSpacer>
              <TextInput
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                id={`${id}-min`}
                theme="refineList"
                value={displayValue.min}
              />
            </ItemSpacer>
            <ItemSpacer>
              <Text color="white">–</Text>
            </ItemSpacer>
            <ItemSpacer>
              <TextInput
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                id={`${id}-max`}
                theme="refineList"
                value={displayValue.max}
              />
            </ItemSpacer>
          </FlexContainer>
        </RefineListSection>
      </VerticalItemSpacer>
    );
  }
}

RefineListMinMax.propTypes = {
  title: PropTypes.string,
  min: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  adjustCompFilterCriteria: PropTypes.func,
  type: PropTypes.string,
};

export default RefineListMinMax;
