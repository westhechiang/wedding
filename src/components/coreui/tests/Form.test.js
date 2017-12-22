import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from '../../../components/coreui/Form';

describe('<Form />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Form />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
