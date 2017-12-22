import React from 'react';
import { shallow } from 'enzyme';
import DateInput from '../../../components/coreui/DateInput';

describe('<DateInput />', () => {
  it('should render', () => {
    const wrapper = shallow(<DateInput />);
  });
});
