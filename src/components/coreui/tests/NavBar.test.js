import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../../../components/coreui/NavBar';

describe('<NavBar />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "top" theme snapshot', () => {
    const wrapper = shallow(<NavBar theme="top" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "bottom" theme snapshot', () => {
    const wrapper = shallow(<NavBar theme="bottom" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "sizing" theme snapshot', () => {
    const wrapper = shallow(<NavBar theme="sizing" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "sizingMarket" theme snapshot', () => {
    const wrapper = shallow(<NavBar theme="sizingMarket" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
