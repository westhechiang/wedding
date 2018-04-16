import React from 'react';
import PropTypes from 'prop-types';
import {
  TextLink,
} from 'www-coreui';

const Button = ({
  children,
  href,
}) => {
  return (
    <TextLink
      w={[300, 300, 400]}
      bg="transparent"
      color="pink.0"
      transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
      textAlign="center"
      hoverBackgroundColor="#F6D7D6"
      hoverColor="white"
      hoverBorderColor="#F6D7D6"
      border={1}
      borderColor="white"
      borderRadius={3}
      p={[10, 10, 20]}
      fontSize={24}
      fontWeight={400}
      href={href}
      target="_blank"
    >
      {children}
    </TextLink>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
};

export default Button;
