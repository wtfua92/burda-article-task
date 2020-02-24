import React from "react";
import { shallow } from "enzyme";
import ArticleHead from "../ArticleHead";

describe("<ArticleHead />", function() {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      authorData: {
        authorName: "Name",
        authorLink: "Link"
      },
      publishDate: "1582493090",
      title: "Title"
    };

    wrapper = shallow(<ArticleHead {...props} />);
  });

  it("should render", () => {
    expect(wrapper.length).toBe(1);
  });

  it("should display author's name", () => {
    const authorElement = wrapper.find(".article__author");
    expect(authorElement.prop("href")).toBe(props.authorData.authorLink);
    expect(authorElement.find("p").text()).toContain("Name");
  });

  it("should display title", () => {
    expect(wrapper.find(".article__title").text()).toBe(props.title);
  });

  it("should display publishDate", () => {
    expect(wrapper.find(".article__author + span").text()).toBe(
      props.publishDate
    );
  });
});
