import React from 'react';
import {
  ExtendedFlex,
} from 'www-coreui';

// import DateDisplay from './components/DateDisplay';
// import PineappleDisplay from './components/PineappleDisplay';
// import LocationDisplay from './components/LocationDisplay';

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
      ],
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = this.state.pineappleDisplayData.map(
      (row, index) => {
        return setTimeout(
          () => {
            const newState = { ...this.state };
            newState.pineappleDisplayData[index].pos2.opacity = '1';
            this.setState(newState);
          }, row.pos2.timer,
        );
      },
    );
  }

  render() {
    // const {
    //   // pineappleDisplayData,
    //   // dateData,
    // } = this.state;

    return (
      <ExtendedFlex
        flexDirection="row"
        align="center"
        justify="space-between"
        bg="yellow"
        position="relative"
        height="100vh"
        width={1}
      />
    );
  }
}

export default Hero;
