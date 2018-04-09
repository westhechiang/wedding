import React from 'react';
import {
  ExtendedFlex,
  ExtendedBox,
  TextLink,
} from 'www-coreui';

import Body from '../components/Body';

import bgImage from '../assets/images/palms.jpg';
import image from '../assets/images/swept.jpg';

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
        bgImage={bgImage}
        bgSize="cover"
        py={[80, 40, 0]}
      >
        <ExtendedFlex
          w={[1, 1, 0.60]}
          height={[400, 400, '100vh']}
          flexDirection="column"
          justify="center"
          align="center"
        >
          <ExtendedFlex
            w={[1]}
            height={[400, 400, '100vh']}
            justify="center"
            align={['center', 'center', 'flex-end']}
            flexDirection="column"
          >
            <Body
              type="B3"
              color="pink.0"
              fontWeight={[900]}
              m={0}
              mb={[40, 40, 60]}
            >
              Wedding Gifts
            </Body>
            <TextLink
              width={[300, 300, 400]}
              color="white"
              transition="0.5s ease-in-out background-color, 0.5s ease-in-out color"
              hoverBackgroundColor="white"
              backgroundColor="transparent"
              hoverColor="black"
              textAlign="center"
              border={1}
              borderColor="white"
              borderRadius={3}
              p={[10, 10, 20]}
              fontSize={24}
              fontWeight={300}
              href="https://www.myregistry.com/giftlist/wenweswed"
              target="_blank"
            >
              Our Registry
            </TextLink>
          </ExtendedFlex>
        </ExtendedFlex>
        <ExtendedFlex
          w={[1, 1, 0.40]}
          justify={['center', 'center', 'flex-start']}
          align="center"
        >
          <ExtendedBox
            w={[300, 350, 400]}
            height={[300, 350, 400]}
            border={3}
            borderRadius={4}
            bgImage={image}
            boxShadow={0}
            bgSize="cover"
            bgPosition="80%"
            borderColor="white"
            overflowX="hidden"
            overflowY="hidden"
          />
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

export default Registry;
