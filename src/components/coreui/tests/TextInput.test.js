import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from '../../../components/coreui/TextInput';

describe('<TextInput />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<TextInput />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "blueLine" theme snapshot', () => {
    const wrapper = shallow(<TextInput theme="blueLine" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "mapSearch" theme snapshot', () => {
    const wrapper = shallow(<TextInput theme="mapSearch" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "refineList" theme snapshot', () => {
    const wrapper = shallow(<TextInput theme="refineList" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
