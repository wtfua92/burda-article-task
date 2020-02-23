import React from 'react';

function ArticleHead({
     title,
     publishDate,
     imgData: {
         url,
         alt,
         width,
         height
     },
    authorData: {
         authorName,
         authorLink
    }
}) {
    const publishDateLocalized = new Date(publishDate * 1000).toLocaleDateString();
    const publishTimeLocalized = new Date(publishDate * 1000).toLocaleTimeString();
    const date = `${publishDateLocalized} ${publishTimeLocalized}`;

    return (
        <div className="article__head col-4">
            <h2 className="article__title">
                {title}
            </h2>
            <div className="article__publish-info">
                <a className="article__author" href={authorLink} title={`by ${authorName}`}>
                    <p>by {authorName}</p>
                </a>
                <span>{date}</span>
            </div>
        </div>
    );
}

export default ArticleHead;