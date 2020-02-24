import React from "react";
import { shallow } from "enzyme";
import Header from "../index";

describe("<Header />", function() {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render", () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.prop("className")).toBe("header");
  });

  it("should use className passed in props", () => {
    expect(
      shallow(<Header className="header--hidden" />).find(".header--hidden")
        .length
    ).toBe(1);
  });
});
