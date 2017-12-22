import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextLink from '../../../components/coreui/TextLink';

describe('<TextLink />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<TextLink />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should match its "large" size snapshot', () => {
    const wrapper = shallow(<TextLink size="large" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "base" size snapshot', () => {
    const wrapper = shallow(<TextLink size="base" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "small" size snapshot', () => {
    const wrapper = shallow(<TextLink size="small" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xsmall" size snapshot', () => {
    const wrapper = shallow(<TextLink size="xsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xxsmall" size snapshot', () => {
    const wrapper = shallow(<TextLink size="xxsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xxxsmall" size snapshot', () => {
    const wrapper = shallow(<TextLink size="xxxsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "light" weight snapshot', () => {
    const wrapper = shallow(<TextLink weight="light" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "semiBold" weight snapshot', () => {
    const wrapper = shallow(<TextLink weight="semiBold" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "boldFont" hover effect snapshot', () => {
    const wrapper = shallow(<TextLink hover="boldFont" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
