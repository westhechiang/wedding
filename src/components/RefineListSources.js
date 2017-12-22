import React from 'react';
import PropTypes from 'prop-types';
import VerticalItemSpacer from './coreui/VerticalItemSpacer';
import Text from './coreui/Text';
import RefineListSection from './coreui/RefineListSection';
import RefineListSource from './RefineListSource';

const sourcesConfig = {
  axio: {
    selectKey: 'property_sources_axio_is_selected',
    countKey: 'property_sources_axio_count',
    label: 'AXIO',
  },
  costar: {
    selectKey: 'property_sources_costar_is_selected',
    countKey: 'property_sources_costar_count',
    label: 'COSTAR',
  },
  midas: {
    selectKey: 'property_sources_midas_is_selected',
    countKey: 'property_sources_midas_count',
    label: 'MIDAS',
  },
  rca: {
    selectKey: 'property_sources_rca_is_selected',
    countKey: 'property_sources_rca_count',
    label: 'RCA',
  },
};

class RefineListSources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.generateSourcesSchema = this.generateSourcesSchema.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.sources !== nextProps.sources) {
      this.generateSourcesSchema(nextProps.sources, sourcesConfig);
    }
  }

  generateSourcesSchema(sources, keys) {
    const sourcesObj = Object.keys(keys).reduce((obj, key) => (
      sources[keys[key].selectKey] !== undefined ?
      {
        ...obj,
        [key]: {
          [keys[key].selectKey]: sources[keys[key].selectKey],
          [keys[key].countKey]: sources[keys[key].countKey],
          label: keys[key].label,
          selectKey: keys[key].selectKey,
          countKey: keys[key].countKey,
          id: keys[key].selectKey,
        },
      } :
      obj),
    {});
    const newSources = Object.keys(sourcesObj).map(source => sourcesObj[source]);
    this.setState({ sources: newSources });
  }

  handleChange(e) {
    const id = e.target.id;
    const newState = { ...this.state };
    const targetObj = newState.sources.find(source => source.id === id);
    const value = !targetObj[id];
    targetObj[id] = value;
    this.setState({ ...newState, targetObj });
    this.props.adjustCompFilterCriteria(id, value);
  }

  render() {
    const { title } = this.props;
    const { sources } = this.state;

    return (
      <VerticalItemSpacer space="15px">
        <Text
          textAlign="center"
          color="white"
          size="xxsmall"
        >
          {title}
        </Text>
        <RefineListSection>
          {
            sources.map(source => (
              <RefineListSource
                key={source.id}
                source={source.label}
                id={source.id}
                count={source[source.countKey]}
                isSelected={source[source.selectKey]}
                handleChange={this.handleChange}
              />
            ))
          }
        </RefineListSection>
      </VerticalItemSpacer>
    );
  }
}

RefineListSources.propTypes = {
  title: PropTypes.string,
  adjustCompFilterCriteria: PropTypes.func,
  sources: PropTypes.object,
};

export default RefineListSources;
