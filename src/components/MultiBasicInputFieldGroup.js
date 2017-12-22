import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './coreui/FlexContainer';
import Text from './coreui/Text';
import TextInput from './coreui/TextInput';
import CircleIcon from './CircleIcon';
import Button from './coreui/Button';

const GroupHeader = ({ heading, index, renderHeading }) => {
  if (renderHeading === true) {
    const titleNumber = index === 0 ? '' : index + 1;
    return (
      <FlexContainer
        height="65px"
        border={(index !== 0) ? 'borderTopExtraExtraLightGray' : ''}
        padding="padTopBottom"
      >
        <Text
          color="blue4"
          lineHeight="16px"
          weight="semiBold"
          size="medium"
        >
          { heading } { titleNumber }
        </Text>
      </FlexContainer>
    );
  }
  return <FlexContainer />;
};


const MultiBasicInputFieldGroup = ({
  dataList,
  listName,
  handleUpdateField,
  handleBlur,
  heading,
  addButtonLabel,
  addEntryButtonClickHandler,
}) => (
  <FlexContainer
    width="fullWidth"
    padding="padAll"
    flexDirection="column"
    flexShrink="0"
    justifyContent="flex-start"
  >
    { dataList.map((elem, index) => elem.map((item, innerIdx) => {
      const renderHeading = innerIdx === 0;
      return (
        <FlexContainer
          width="fullWidth"
          flexDirection="column"
        >
          <GroupHeader
            heading={heading}
            index={index}
            renderHeading={renderHeading}
          />
          <FlexContainer
            alignItems="center"
            justifyContent="space-between"
            padding="padAll"
            border="borderTopExtraExtraLightGray"
            width="fullWidth"
            height="65px"
          >
            <Text
              color={(item.required !== false) ? 'gray2' : 'gray6'}
              weight="semiBold"
              size="xsmall"
            >
              {item.label}
            </Text>
            <TextInput
              theme="dealDetails"
              value={item.value}
              onChange={handleUpdateField(item.serializeName, listName, index)}
              onBlur={handleBlur}
            />
          </FlexContainer>
        </FlexContainer>
      );
    }))}
    <Button
      theme="dealDetails"
      onClick={addEntryButtonClickHandler}
    >
      <FlexContainer
        justifyContent="flex-start"
        alignItems="center"
      >
        <CircleIcon handleClick={() => event.preventDefault} type="plusBlue" />
        <Text
          color="cyan4"
          size="medium"
          lineHeight="18px"
          textIndent="10px"
        >
          { addButtonLabel }
        </Text>
      </FlexContainer>
    </Button>
  </FlexContainer>
);

GroupHeader.propTypes = {
  heading: PropTypes.string,
  index: PropTypes.number,
  renderHeading: PropTypes.bool,
};

MultiBasicInputFieldGroup.propTypes = {
  dataList: PropTypes.array,
  listName: PropTypes.string,
  handleBlur: PropTypes.func,
  handleUpdateField: PropTypes.func,
  heading: PropTypes.string,
  addButtonLabel: PropTypes.string,
  addEntryButtonClickHandler: PropTypes.func,
};

export default MultiBasicInputFieldGroup;
