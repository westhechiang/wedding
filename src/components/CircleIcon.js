import React from 'react';
import PropTypes from 'prop-types';
import Circle from './coreui/Circle';
import { theme } from '../ui';
import starIcon from '../assets/images/icons/star.svg';
import infoIcon from '../assets/images/icons/info-icon.svg';
import xIcon from '../assets/images/icons/x.svg';
import plusIcon from '../assets/images/icons/plus-icon.svg';
import greenCheckIcon from '../assets/images/icons/green-check-icon.svg';
import minusIcon from '../assets/images/icons/minus-icon.svg';
import FlexContainer from './coreui/FlexContainer';
import Image from './coreui/Image';

class CircleIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.callBackParam);
  }

  render() {
    const { type, isSelected, size } = this.props;

    const types = {
      minus: {
        props: {
          backgroundColor: theme.color.grayExtraLight,
          size: '20px',
          color: theme.color.grayExtraDark,
          textAlign: 'center',
        },
        content: <Image width="9px" height="9px" src={minusIcon} />,
      },
      close: {
        props: {
          backgroundColor: theme.color.grayExtraLight,
          size: size || '15px',
          color: theme.color.grayExtraDark,
          textAlign: 'center',
        },
        content: <Image width="9px" height="9px" src={xIcon} />,
      },
      star: {
        props: {
          backgroundColor: (isSelected ? theme.color.gold : theme.color.grayExtraLight),
          size: '15px',
          color: theme.color.grayExtraDark,
          textAlign: 'center',
        },
        content: <Image width="9px" height="9px" src={starIcon} />,
      },
      showInfo: {
        props: {
          backgroundColor: theme.color.grayExtraLight,
          size: '15px',
          color: theme.color.grayExtraDark,
          textAlign: 'center',
        },
        content: <Image width="9px" height="9px" src={infoIcon} />,
      },
      check: {
        props: {
          backgroundColor: theme.color.white,
          borderColor: theme.color.green,
          size: '25px',
        },
        content: <Image width="12px" height="12px" src={greenCheckIcon} />,
      },
      plus: {
        props: {
          backgroundColor: theme.color.grayExtraLight,
          size: '24px',
          color: 'grayExtraExtraExtraLight',
          textAlign: 'center',
        },
        content: <Image width="12px" height="12px" src={plusIcon} />,
      },
      plusBlue: {
        props: {
          backgroundColor: theme.color.cyan4,
          size: '24px',
          color: 'grayExtraExtraExtraLight',
          textAlign: 'center',
        },
        content: <Image width="12px" height="12px" src={plusIcon} />,
      },
      undefined: {
        props: {
          borderColor: theme.color.grayExtraLight,
          backgroundColor: theme.color.white,
          size: '25px',
        },
      },
    };

    return (
      <Circle {...types[type].props} active hover onClick={this.handleClick} >
        <FlexContainer
          justifyContent="center"
          height="fullHeight"
          width="fullWidth"
          alignItems="center"
          color={types[type].props.color}
        >
          {types[type].content}
        </FlexContainer>
      </Circle>
    );
  }
}

CircleIcon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func,
  isSelected: PropTypes.bool,
  callBackParam: PropTypes.any,
};

export default CircleIcon;
