import React from 'react';

function Paragraph({content}) {
    return (
        <div className="article__paragraph" dangerouslySetInnerHTML={content} />
    );
}

export default Paragraph;