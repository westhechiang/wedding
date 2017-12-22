import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Background from '../../../components/coreui/Background';

describe('<Background />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Background />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
