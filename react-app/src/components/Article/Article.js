import React from 'react';

import Paragraph from "./Paragraph/Paragraph";
import MediaParagraph from "./Paragraph/MediaParagraph";
import ArticleHead from "./ArticleHead";

import "./article.scss"
import {getAuthorData} from "../../utils/helpers";

const makeParagraph = (text) => (<Paragraph content={{__html: text}} />);
const makeMediaParagraph = (imgData, text, url) => (<MediaParagraph imgData={imgData} footNote={{__html: text}} url={url} />);
const makeArticleHead = (headMedia, author, title, date) => {
    console.log(author);
    const authorData = getAuthorData(author);
    const imgData = headMedia.entity.fieldImage;

    return (<ArticleHead authorData={authorData} imgData={imgData} title={title} publishDate={date} />)
};

function Article({articleData}) {
    if (!articleData) {
        return null;
    }

    const paragraphData = (articleData && articleData.paragraphs) || [];

    const paragraphs = paragraphData.map(({entity: {fieldMedia, fieldText}}) => {
        if (fieldMedia) {
            const {entity: { entityUrl, fieldImage, fieldDescription: { processed: text} }} = fieldMedia;
            return makeMediaParagraph(fieldImage, text, entityUrl);
        }

        if (fieldText) {
            return makeParagraph(fieldText.processed);
        }
        return null;
    });

    const articleHead = makeArticleHead(articleData.fieldTeaserMedia, articleData.author, articleData.title, articleData.created)

    return (
        <div className="article col-4">
            {articleHead}
            <div className="articles__item__body col-4">
                {paragraphs}
            </div>
        </div>
    );
}

export default Article;