import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '../../../components/coreui/Text';

describe('<Text />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Text />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "large" size snapshot', () => {
    const wrapper = shallow(<Text size="large" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "base" size snapshot', () => {
    const wrapper = shallow(<Text size="base" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "small" size snapshot', () => {
    const wrapper = shallow(<Text size="small" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xsmall" size snapshot', () => {
    const wrapper = shallow(<Text size="xsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xxsmall" size snapshot', () => {
    const wrapper = shallow(<Text size="xxsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xxxsmall" size snapshot', () => {
    const wrapper = shallow(<Text size="xxxsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "light" weight snapshot', () => {
    const wrapper = shallow(<Text weight="light" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "semiBold" weight snapshot', () => {
    const wrapper = shallow(<Text weight="semiBold" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "boldFont" hover effect snapshot', () => {
    const wrapper = shallow(<Text hover="boldFont" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
