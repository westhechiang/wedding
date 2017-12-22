import React from 'react';
import PropTypes from 'prop-types';
import TextLink from './coreui/TextLink';
import Image from './coreui/Image';
import FlexContainer from './coreui/FlexContainer';
import ascIcon from '../assets/images/icons/sidebar-card-table-sort-asc-icon.svg';
import descIcon from '../assets/images/icons/sidebar-card-table-sort-desc-icon.svg';

const SidebarTableTh = ({
  compCardSort,
  content,
  handleClick,
  id,
}) => {
  const isSorting = compCardSort[id];
  const sortingIcon = {
    true: descIcon,
    false: ascIcon,
  };
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="flex-end"
    >
      <TextLink
        textAlign="right"
        size="xxxsmall"
        weight={(isSorting !== undefined) ? 'heavy' : undefined}
        color={(isSorting !== undefined) ? 'white' : 'grayLight'}
        onClick={handleClick}
      >
        {content}
      </TextLink>
      {
        sortingIcon[isSorting] !== undefined &&
        <Image
          width="5"
          height="5"
          margin="0 0 0 3px"
          src={sortingIcon[isSorting]}
        />
      }
    </FlexContainer>
  );
};

SidebarTableTh.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleClick: PropTypes.func,
  id: PropTypes.string,
  compCardSort: PropTypes.object,
};

export default SidebarTableTh;
