import React from "react";

function ArticleHead({
  title,
  publishDate,
  authorData: { authorName, authorLink }
}) {
  return (
    <div className="article__head col-4">
      <h2 className="article__title">{title}</h2>
      <div className="article__publish-info">
        <a
          className="article__author"
          href={authorLink}
          title={`by ${authorName}`}
        >
          <p>by {authorName}</p>
        </a>
        <span>{publishDate}</span>
      </div>
    </div>
  );
}

export default ArticleHead;
