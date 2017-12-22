import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TransparentSection from '../../../components/coreui/TransparentSection';

describe('<TransparentSection />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<TransparentSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
