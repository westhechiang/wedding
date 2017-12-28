import React from 'react';

import FlexContainer from '../components/coreui/FlexContainer';
import Text from '../components/coreui/Text';
import Image from '../components/coreui/Image';

import Pineapple from '../assets/images/pineapple_hero_2.png';

import { theme } from '../ui/index';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = this.state.data.map(
      (row, index) => {
        setTimeout(
          () => {
            const newState = { ...this.state };
            newState.data[index].pos2.opacity = '1';
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

    const { data } = this.state;

    return (
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        position="relative"
        height="100vh"
        width="100%"
      >
        <Image
          src={Pineapple}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
        <FlexContainer
          height="700px"
          flexDirection="column"
          justifyContent="flex-end"
        >
          {
            data.map(
              row => (
                <FlexContainer key={row.id}>
                  <Text
                    size="xxxlarge"
                    color="white"
                    family="pacifico"
                    lineHeight="98px"
                  >
                    {row.pos1.value}
                  </Text>
                  <Text
                    size="xxxlarge"
                    color="white"
                    family="pacifico"
                    opacity={row.pos2.opacity}
                    transition="opacity 1s linear"
                    lineHeight="98px"
                  >
                    {row.pos2.value}
                  </Text>
                </FlexContainer>
              )
            )
          }
        </FlexContainer>
      </FlexContainer>
    )
  }

}

export default Hero;
