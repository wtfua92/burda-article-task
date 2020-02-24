import React from "react";
import { shallow } from "enzyme";
import MediaParagraph from "../MediaParagraph";
import mediaParagraphData from "./mocks/mediaParagraph";

describe("<MediaParagraph />", function() {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      imgData: mediaParagraphData.entity.fieldMedia.entity.fieldImage,
      footNote: {
        __html: mediaParagraphData.entity.fieldMedia.entity.fieldDescription.processed
      }
    };

    wrapper = shallow(<MediaParagraph {...props} />);
  });

  it("should render", () => {
    expect(wrapper.length).toBe(1);
  });

  it("should contain paragraph content", () => {
    expect(wrapper.prop("dangerouslySetInnerHTML")).toEqual(props.content);
  });

  it("should contain an image", () => {
    expect(wrapper.find("img").prop("src")).toEqual(props.imgData.url);
  });
});
