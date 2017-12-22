import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MapSearchContainer from '../../../components/coreui/MapSearchContainer';

describe('<MapSearchContainer />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<MapSearchContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "active" snapshot', () => {
    const wrapper = shallow(<MapSearchContainer active />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
