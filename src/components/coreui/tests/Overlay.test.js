import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Overlay from '../../../components/coreui/Overlay';

describe('<Overlay />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<Overlay />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
