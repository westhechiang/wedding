import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemSpacer from '../../../components/coreui/ItemSpacer';

describe('<ItemSpacer />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<ItemSpacer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
