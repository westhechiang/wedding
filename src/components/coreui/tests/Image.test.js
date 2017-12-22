import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Image from '../../../components/coreui/Image';

describe('<Image />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Image />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
