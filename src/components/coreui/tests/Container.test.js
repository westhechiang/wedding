import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Container from '../../../components/coreui/Container';

describe('<Container />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
