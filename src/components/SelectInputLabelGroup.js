import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Label from './coreui/Label';
import Select from './coreui/Select';

const SelectInputLabelGroup = ({
  clearable,
  handleChange,
  id,
  label,
  options,
  theme,
  value,
}) => (
  <FlexContainer
    justifyContent="center"
    flexDirection="column"
    alignItems="flex-start"
  >
    {
      value.length > 0 &&
      <Label
        theme={theme}
      >
        {label}
      </Label>
    }
    <Select
      id={id}
      onChange={val => handleChange(id, val)}
      options={options}
      placeholder={label}
      theme={theme}
      value={value}
      clearable={clearable}
    />
  </FlexContainer>
);

SelectInputLabelGroup.propTypes = {
  clearable: PropTypes.bool,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
};

export default SelectInputLabelGroup;
