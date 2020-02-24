import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", function() {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render", () => {
    expect(wrapper.length).toBe(1);
  });

  it("should not show article initially", () => {
    expect(wrapper.find("Article").length).toBe(0);
  });

  it("should show article after successful data fetch", () => {
    wrapper.setState({
      articleData: {}
    });
    expect(wrapper.find("Article").length).toBe(1);
  });

  it("should display <Header/>", () => {
    expect(wrapper.find("Header").length).toBe(1);
  });

  it("should display <Footer/>", () => {
    expect(wrapper.find("Footer").length).toBe(1);
  });
});
