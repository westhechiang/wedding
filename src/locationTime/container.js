import React from 'react';

import FlexContainer from '../components/coreui/FlexContainer';
import Text from '../components/coreui/Text';
import VerticalItemSpacer from '../components/coreui/VerticalItemSpacer';

class LocationTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlexContainer
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="blue"
        position="relative"
        height="100vh"
        width="100%"
      >
        <FlexContainer
          width="40%"
          padding="padAll"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <VerticalItemSpacer>
            <Text
              size="default"
            >
              WHEN:
            </Text>
          </VerticalItemSpacer>
          <VerticalItemSpacer>
            <Text
              size="xxlarge"
            >
              Saturday,
            </Text>
          </VerticalItemSpacer>
          <VerticalItemSpacer>
            <Text
              size="xxlarge"
            >
              November 11
            </Text>
          </VerticalItemSpacer>
          <VerticalItemSpacer>
            <Text
              size="xxlarge"
            >
              2018
            </Text>
          </VerticalItemSpacer>
        </FlexContainer>

        <FlexContainer
          padding="padAll"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <VerticalItemSpacer>
            <Text
              size="default"
            >
              WHERE:
            </Text>
          </VerticalItemSpacer>
          <VerticalItemSpacer>
            <Text
              size="xxlarge"
            >
              82950 61st Ave.
            </Text>
          </VerticalItemSpacer>
          <VerticalItemSpacer>
            <Text
              size="xxlarge"
            >
              Thermal, CA
            </Text>
          </VerticalItemSpacer>
          <VerticalItemSpacer>
            <Text
              size="xxlarge"
            >
              92274
            </Text>
          </VerticalItemSpacer>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default LocationTime;
