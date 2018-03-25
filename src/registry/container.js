import React from 'react';
import {
  ExtendedFlex,
  ExtendedBox,
  Background,
  Image,
  TextLink,
} from 'www-coreui';

import bgImage from '../assets/images/palms.jpg';
import stellaImage from '../assets/images/swept.jpg';

class Registry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ExtendedFlex
        w={1}
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        height={['auto', 'auto', '100vh']}
        justify="center"
        align="center"
        bg="white"
      >
        <ExtendedBox
          w={[1, 1, 0.7]}
          height={[400, 400, '80vh']}
        >
          <Background
            content={bgImage}
            backgroundSize="cover"
          >
            <ExtendedFlex
              w={[1, 1, 0.7]}
              height={[400, 400, '80vh']}
              justify="center"
              align="center"
              flexDirection="column"
              position="relative"
            >
              <TextLink
                width={[300, 300, 400]}
                color="white"
                transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
                hoverBackgroundColor="white"
                backgroundColor="transparent"
                hoverColor="black"
                border={2}
                borderColor="white"
                borderRadius={0}
                p={[10, 10, 20]}
                fontSize={24}
                fontWeight={300}
                href="https://www.myregistry.com/giftlist/wenweswed"
                target="_blank"
              >
                Registry
              </TextLink>
            </ExtendedFlex>
          </Background>
        </ExtendedBox>
        <ExtendedFlex
          w={[1, 1, 0.3]}
          height={['auto', 'auto', '100vh']}
          justify="center"
          position="relative"
          align="center"
        >
          <Image
            src={stellaImage}
            w={[1, 1, 600]}
            position={['static', 'static', 'absolute']}
            left="-200px"
            border={[0, 0, '20px solid white']}
          />
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

export default Registry;
