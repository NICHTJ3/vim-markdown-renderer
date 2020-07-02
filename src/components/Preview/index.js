import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from '../CodeBlock';
import './markdown.css';
import './preview.css';

export default function Preview({ md }) {
  return (
    <Markdown
      className="preview"
      source={md}
      renderers={{
        code: CodeBlock,
      }}
      escapeHtml={true}
    />
  );
}
