import React from "react";

import Paragraph from "./Paragraph/Paragraph";
import MediaParagraph from "./Paragraph/MediaParagraph";
import ArticleHead from "./ArticleHead";
import { getAuthorData } from "../../utils/helpers";

import "./article.scss";

const makeParagraph = (text, key) => (
  <Paragraph content={{ __html: text }} key={key} />
);

const makeMediaParagraph = (imgData, text, key) => (
  <MediaParagraph imgData={imgData} footNote={{ __html: text }} key={key} />
);

const makeArticleHead = (author, title, date) => {
  const authorData = getAuthorData(author);
  return (
    <ArticleHead authorData={authorData} title={title} publishDate={date} />
  );
};

function Article({ articleData }) {
  if (!articleData) {
    return null;
  }

  const paragraphData = (articleData && articleData.paragraphs) || [];

  const paragraphs = paragraphData.map(
    ({ entity: { fieldMedia, fieldText, id } }, i) => {
      if (fieldMedia) {
        const {
          entity: {
            entityUrl,
            fieldImage,
            fieldDescription: { processed: text }
          }
        } = fieldMedia;
        return makeMediaParagraph(fieldImage, text, entityUrl, id + i);
      }

      if (fieldText) {
        return makeParagraph(fieldText.processed, id + i);
      }
      return null;
    }
  );

  const publishTime = new Date(articleData.created).toLocaleTimeString();
  const publishDate = new Date(articleData.created).toLocaleDateString();

  const articleHead = makeArticleHead(
    articleData.author,
    articleData.title,
  `${publishTime} ${publishDate}`
  );

  return (
    <div className="article col-4">
      {articleHead}
      <div className="article__body col-4">{paragraphs}</div>
    </div>
  );
}

export default Article;
