import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StyledRentCompReactTable from '../../../components/coreui/StyledRentCompReactTable';

describe('<StyledRentCompReactTable />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<StyledRentCompReactTable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
