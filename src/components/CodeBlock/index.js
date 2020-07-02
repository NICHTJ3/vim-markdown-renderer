import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

export default function CodeBlock({value,language}) {
  return (
    <SyntaxHighlighter language={language}>
      {value}
    </SyntaxHighlighter>
  );
}

