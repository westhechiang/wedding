import React from 'react';
import {
  ExtendedFlex,
  Image,
} from 'www-coreui';

import OreoImage from '../assets/images/oreo.png';

class Oreo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedFlex
        w={1}
        height="150vh"
        align="flex-end"
        justify="center"
        px={20}
        pt={20}
      >
        <Image
          src={OreoImage}
          w={[1, 500]}
        />
      </ExtendedFlex>
    );
  }
}

export default Oreo;
