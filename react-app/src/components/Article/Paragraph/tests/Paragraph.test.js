import React from "react";
import {shallow} from "enzyme";
import Paragraph from "../Paragraph";
import paragraphData from "./mocks/paragraph";

describe("<Paragraph />", function () {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            content: {
                __html: paragraphData.entity.fieldText.processed
            }
        };

        wrapper = shallow(<Paragraph {...props} />);
    });

    it("should render", () => {
        expect(wrapper.length).toBe(1);
    });

    it("should contain paragraph content", () => {
        expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(props.content)
    });
});