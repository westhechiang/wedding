import React from 'react';
import {
  Flex,
} from 'styled-grid';
import {
  ExtendedFlex,
} from 'www-coreui';

// import DateDisplay from './components/DateDisplay';
import PineappleDisplay from './components/PineappleDisplay';
// import LocationDisplay from './components/LocationDisplay';

import VerticalItemSpacer from '../components/coreui/VerticalItemSpacer';
import StyledFA from '../components/coreui/StyledFA';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pineappleDisplayData: [
        {
          id: 0,
          pos1: {
            value: 'W',
            opacity: '0',
          },
          pos2: {
            value: 'en',
            opacity: '0',
            timer: 1500,
          },
        },
        {
          id: 1,
          pos1: {
            value: 'W',
            opacity: '0',
          },
          pos2: {
            value: 'es',
            opacity: '0',
            timer: 2500,
          },
        },
        {
          id: 2,
          pos1: {
            value: 'W',
            opacity: '0',
          },
          pos2: {
            value: 'ed',
            opacity: '0',
            timer: 3500,
          },
        },
      ],
      dateData: [
        '11', '10', '18',
      ]
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = this.state.pineappleDisplayData.map(
      (row, index) => {
        setTimeout(
          () => {
            const newState = { ...this.state };
            newState.pineappleDisplayData[index].pos2.opacity = '1';
            this.setState(newState);
          }, row.pos2.timer
        )
      }
    );
  }

  render() {
    const gradient =`
      linear-gradient(
        ${theme.color.pink} 35%,
        ${theme.color.salmon} 100%
      );
    `;

    const {
      pineappleDisplayData,
      dateData,
      } = this.state;

    return (
      <Flex
        flexDirection="row"
        align="center"
        justify="space-between"
        bg="yellow"
        position="relative"
        height="100vh"
        width="100%"
      >
        <PineappleDisplay
          data={pineappleDisplayData}
        />
        <ExtendedFlex
          position="absolute"
          width={1}
          bottom="0"
          height="100px"
          justify="center"
          align="center"
        >
          <StyledFA
            name="caret-down"
            size="4x"
            color="white"
          />
        </ExtendedFlex>
      </Flex>
    )
  }

}

export default Hero;
