import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SidebarContainer from '../../../components/coreui/SidebarContainer';

describe('<SidebarContainer />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<SidebarContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its snapshot when passed a "width" prop', () => {
    const wrapper = shallow(<SidebarContainer width="50px" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its snapshot when passed a "height" prop', () => {
    const wrapper = shallow(<SidebarContainer height="50px" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
