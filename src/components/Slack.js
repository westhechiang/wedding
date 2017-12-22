import React from 'react';
import FloatingTab from './coreui/FloatingTab';
import Image from './coreui/Image';
import slackIcon from '../assets/images/icons/slack-icon.svg';

const SLACK_OPEN_URL = 'slack://channel?team=T04AYJ174&id=G6TTS5AHG';

const Slack = () => (
  <FloatingTab
    position="absolute"
    right="-20px"
    bottom="20%"
    backgroundColor="white"
    width="40px"
    zIndex="9999"
    height="40px"
  >
    <a href={SLACK_OPEN_URL}>
      <Image height="40" src={slackIcon} />
    </a>
  </FloatingTab>
);

export default Slack;
