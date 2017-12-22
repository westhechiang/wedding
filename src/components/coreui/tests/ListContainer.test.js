import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListContainer from '../../../components/coreui/ListContainer';

describe('<ListContainer />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<ListContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
