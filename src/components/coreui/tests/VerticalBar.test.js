import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VerticalBar from '../../../components/coreui/VerticalBar';

describe('<VerticalBar />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<VerticalBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xsmall" size snapshot', () => {
    const wrapper = shallow(<VerticalBar size="xsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "xxsmall" size snapshot', () => {
    const wrapper = shallow(<VerticalBar size="xxsmall" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
