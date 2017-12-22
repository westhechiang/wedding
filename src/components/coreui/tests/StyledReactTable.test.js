import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StyledReactTable from '../../../components/coreui/StyledReactTable';

describe('<StyledReactTable />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<StyledReactTable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
