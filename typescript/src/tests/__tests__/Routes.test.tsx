import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { About, Counter } from "./../../containers";
import Routes from "./../../Routes";

describe("Routes", () => {
  it("/about path should redirect to About component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(About)).toHaveLength(1);
  });

  it("/counter path should redirect to Counter component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/counter"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(Counter)).toHaveLength(1);
  });
});
