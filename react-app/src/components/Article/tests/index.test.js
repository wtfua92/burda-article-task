import React from "react";
import { shallow } from "enzyme";
import Article from "../index";
import paragraphData from "../Paragraph/tests/mocks/paragraph";
import mediaParagraphData from "../Paragraph/tests/mocks/mediaParagraph";

describe("<Article />", function() {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      articleData: {
        paragraphs: [
          paragraphData,
          mediaParagraphData,
          paragraphData,
          mediaParagraphData
        ],
        title: "Title",
        created: 1571292000,
        author: {
          user: {
            entityUrl: {
              path: "/autor/joe-bloggs"
            },
            fieldForename: "Joe",
            fieldSurname: "Bloggs"
          }
        }
      }
    };

    wrapper = shallow(<Article {...props} />);
  });

  it("should render", () => {
    expect(wrapper.length).toBe(1);
  });

  it("should not render if no articleData prop", () => {
    expect(shallow(<Article />).get(0)).toBe(null);
  });

  it("should render all paragraphs", () => {
    expect(wrapper.find(".article__body").children().length).toBe(
      props.articleData.paragraphs.length
    );
  });

  it("should render ArticleHead", () => {
    expect(wrapper.find("ArticleHead").length).toBe(1);
  });
});
