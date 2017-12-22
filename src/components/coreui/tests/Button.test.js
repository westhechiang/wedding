import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../../../components/coreui/Button';

describe('<Button />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "green" theme snapshot', () => {
    const wrapper = shallow(<Button theme="green" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "whiteBlue" theme snapshot', () => {
    const wrapper = shallow(<Button theme="whiteBlue" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "whiteGray" theme snapshot', () => {
    const wrapper = shallow(<Button theme="whiteGray" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "blue" theme snapshot', () => {
    const wrapper = shallow(<Button theme="blue" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "gray" theme snapshot', () => {
    const wrapper = shallow(<Button theme="gray" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "grayCondensed" theme snapshot', () => {
    const wrapper = shallow(<Button theme="grayCondensed" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
