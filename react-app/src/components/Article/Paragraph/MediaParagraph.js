import React from 'react';

function MediaParagraph({imgData: { url, width, height, alt }, footNote}) {
    return (
        <div className="article__paragraph article__paragraph--media">
            <img className="article__image img-responsive" src={url} alt={alt} width={width} height={height} />
            <div className="article__image-footnote" dangerouslySetInnerHTML={footNote} />
        </div>
    );
}

export default MediaParagraph;