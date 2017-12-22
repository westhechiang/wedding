import React from 'react';
import PropTypes from 'prop-types';
import Text from './coreui/Text';
import Range from './coreui/Range';
import FlexContainer from './coreui/FlexContainer';
import RefineListSection from './coreui/RefineListSection';
import VerticalItemSpacer from './coreui/VerticalItemSpacer';

class RefineListRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAfterChange = this.handleAfterChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      min: e[0],
      max: e[1],
    });
  }

  handleAfterChange() {
    Object.keys(this.state).forEach((key) => {
      this.props.adjustCompFilterCriteria(`${this.props.id}_${key}`, this.state[key]);
    });
  }

  render() {
    const { id, title } = this.props;
    const defaultValue = [this.state.min, this.state.max];

    return (
      <VerticalItemSpacer space="15px">
        <Text textAlign="center" color="white" size="xxsmall">{title}</Text>
        <RefineListSection>
          <FlexContainer
            width="fullWidth"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <VerticalItemSpacer space="10px">
              <Text
                color="white"
                size="xsmall"
                textAlign="center"
              >
                {this.state.min} – {this.state.max}
              </Text>
            </VerticalItemSpacer>
            <Range
              step={1}
              id={id}
              min={1900}
              max={2020}
              onChange={this.handleChange}
              onAfterChange={this.handleAfterChange}
              defaultValue={defaultValue}
            />
          </FlexContainer>
        </RefineListSection>
      </VerticalItemSpacer>
    );
  }
}

RefineListRange.propTypes = {
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
};


export default RefineListRange;
