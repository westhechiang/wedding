import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RefineListSection from '../../../components/coreui/RefineListSection';

describe('<RefineListSection />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<RefineListSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
