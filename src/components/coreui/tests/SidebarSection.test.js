import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SidebarSection from '../../../components/coreui/SidebarSection';

describe('<SidebarSection />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<SidebarSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "fullWidth" snapshot', () => {
    const wrapper = shallow(<SidebarSection width="fullWidth" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "inherit" snapshot', () => {
    const wrapper = shallow(<SidebarSection width="inherit" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its snapshot when passed a "height" prop', () => {
    const wrapper = shallow(<SidebarSection height="50px" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
