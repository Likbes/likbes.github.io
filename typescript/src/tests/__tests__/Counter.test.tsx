import React from "react";
import { shallow } from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { Counter } from "./../../containers";

describe('Counter', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Counter />, div);
    unmountComponentAtNode(div);
  });


  it('should render with value 0', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('p').text()).toEqual('0');
  });

  it('should render value 1 after inc button click', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('p').text()).toEqual('0');
    wrapper.find('.inc').simulate('click');
    expect(wrapper.find('p').text()).toEqual('1');
  });

  it('should render value -1 after dec button click', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('p').text()).toEqual('0');
    wrapper.find('.dec').simulate('click');
    expect(wrapper.find('p').text()).toEqual('-1');
  });
});

