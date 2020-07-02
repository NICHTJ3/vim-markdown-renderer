import React from 'react'
import Markdown from 'react-markdown';
import './markdown.css';
import './preview.css';

export default function Preview({md}) {
  return (
    <div>
        <Markdown className="preview" source={md} escapeHtml={true} />
    </div>
  )
}

