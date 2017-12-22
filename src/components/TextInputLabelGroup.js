import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Label from './coreui/Label';
import TextInput from './coreui/TextInput';

const TextInputLabelGroup = ({
  children,
  handleChange,
  handleBlur,
  handleFocus,
  handleKeyDown,
  id,
  label,
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
    <TextInput
      theme={theme}
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      placeholder={label}
      value={value}
    />
    {children}
  </FlexContainer>
);

TextInputLabelGroup.propTypes = {
  children: PropTypes.any,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleKeyDown: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.string,
  value: PropTypes.string,
};

export default TextInputLabelGroup;
