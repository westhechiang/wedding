import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
} from 'www-coreui';

export const types = {
  B1: {
    display: 'block',
    fontFamily: 'poiretOne',
    fontSize: [4, 5, 6],
  },
  B2: {
    display: 'block',
    fontFamily: 'poiretOne',
    fontSize: [1, 2, 3],
  },
  B3: {
    display: 'block',
    fontFamily: 'poiretOne',
    fontSize: [5, 6, 7],
  },
  B4: {
    display: 'block',
    fontFamily: 'poiretOne',
    fontSize: [2, 3, 4],
  },
};

const Body = (props) => {
  const { children, type, ...passedProps } = props;
  return (
    <Text
      {...types[type]}
      {...passedProps}
    >
      {children}
    </Text>
  );
};

Body.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(types)),
  passedProps: PropTypes.any,
};

export default Body;
