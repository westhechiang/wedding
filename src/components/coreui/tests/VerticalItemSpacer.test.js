import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VerticalItemSpacer from '../../../components/coreui/VerticalItemSpacer';

describe('<VerticalItemSpacer />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<VerticalItemSpacer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its snapshot when passed a "space" prop', () => {
    const wrapper = shallow(<VerticalItemSpacer space="10px" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
