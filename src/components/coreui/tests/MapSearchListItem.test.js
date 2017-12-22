import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchListItem from '../../../components/coreui/SearchListItem';

describe('<SearchListItem />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<SearchListItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "bullets" snapshot', () => {
    const wrapper = shallow(<SearchListItem bullets />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
