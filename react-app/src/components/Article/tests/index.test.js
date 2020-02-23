import React from "react";
import {shallow} from "enzyme";
import Article from "../index";

describe("<Article />", function () {
    let wrapper;
    let props;
    const mediaParagraph = {
        entity: {
            fieldMedia: {
                entity: {
                    fieldImage: {
                        alt: "Image",
                        height: 100,
                        url: "Url",
                        width: 100
                    },
                    fieldDescription: {
                        processed: "<p>Description</p>"
                    }
                }
            }
        }
    };
    const paragraph = {
        fieldText: {
            processed: "<p>Ein erstes <a href=\"/tags/mantel\">Mantel</a>-Fazit für die Herbst/Wintersaison 2019/20 könnte lauten: Gerader und weniger voluminös sind die neuen Modelle geschnitten. Weniger Extravaganz, mehr schlichte Raffinesse. Ein gutes Beispiel ist dafür der <a href=\"https://www.harpersbazaar.de/fashion/blazermantel-trend-herbst-2019\">Blazermantel</a>. Ähnlich schmal oben und unten zugeschlagen ist der Wickelmantel, der allerdings durch seine betonte Taille femininer und gleichsam lässiger daherkommt. Lässiger aus dem Grund, weil man sich in ihm immer ein wenig fühlt wie ein Dandy in seinem lose gewickelten Morgenmantel. Wir zeigen die vier schönsten Varianten des neuen Mantel-Lieblings.</p>"
        },
    };
    beforeEach(() => {
        props = {
            articleData: {
                paragraphs: [
                    paragraph,
                    mediaParagraph,
                    paragraph,
                    mediaParagraph
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
        console.log(wrapper.debug());
    });
});