import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StyledRouterNavLink from '../../../components/coreui/StyledRouterNavLink';

describe('<StyledRouterNavLink />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<StyledRouterNavLink to="/" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its snapshot when passed a "height" prop', () => {
    const wrapper = shallow(<StyledRouterNavLink to="/" height="50px" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
