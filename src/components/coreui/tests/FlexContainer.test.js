import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FlexContainer from '../../../components/coreui/FlexContainer';

describe('<FlexContainer />', () => {
  it('should match its empty snapshot', () => {
    const wrapper = shallow(<FlexContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "padTop" snapshot', () => {
    const wrapper = shallow(<FlexContainer padding="padTop" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "padBottom" snapshot', () => {
    const wrapper = shallow(<FlexContainer padding="padBottom" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "padTopBottom" snapshot', () => {
    const wrapper = shallow(<FlexContainer padding="padTopBottom" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "padLeft" snapshot', () => {
    const wrapper = shallow(<FlexContainer padding="padLeft" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "padRight" snapshot', () => {
    const wrapper = shallow(<FlexContainer padding="padRight" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "padAll" snapshot', () => {
    const wrapper = shallow(<FlexContainer padding="padAll" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "borderBottomLight" snapshot', () => {
    const wrapper = shallow(<FlexContainer border="borderBottomLight" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "borderBottom" snapshot', () => {
    const wrapper = shallow(<FlexContainer border="borderBottom" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "borderTop" snapshot', () => {
    const wrapper = shallow(<FlexContainer border="borderTop" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "borderTopBottom" snapshot', () => {
    const wrapper = shallow(<FlexContainer border="borderTopBottom" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "background" snapshot', () => {
    const wrapper = shallow(<FlexContainer background="/assets/test.png" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "fullHeight" snapshot', () => {
    const wrapper = shallow(<FlexContainer height="fullHeight" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "fullVhMinusNav" snapshot', () => {
    const wrapper = shallow(<FlexContainer height="fullVhMinusNav" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "fullHeightMinusNav" snapshot', () => {
    const wrapper = shallow(<FlexContainer height="fullHeightMinusNav" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "fullVhMinusRefineListFooter" snapshot', () => {
    const wrapper = shallow(<FlexContainer height="fullVhMinusRefineListFooter" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "fullWidth" snapshot', () => {
    const wrapper = shallow(<FlexContainer width="fullWidth" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match its "inherit" snapshot', () => {
    const wrapper = shallow(<FlexContainer width="inherit" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
