import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Checkbox from '../../../components/coreui/Checkbox';

describe('<Checkbox />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Checkbox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
