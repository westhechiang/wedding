import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Range from '../../../components/coreui/Range';

describe('<Range />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Range />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
