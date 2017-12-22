import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Circle from '../../../components/coreui/Circle';

describe('<Circle />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Circle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
