import React from "react";
import { shallow } from "enzyme";
import Footer from "../index";

describe("<Footer />", function() {
  it("should render", () => {
    expect(shallow(<Footer />).length).toBe(1);
  });

  it("should display current year", () => {
    expect(
      shallow(<Footer />)
        .find("span")
        .text()
    ).toContain(new Date().getFullYear());
  });
});
