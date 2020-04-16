import React, { useState } from 'react';
import Editor from 'react-codemirror';
import Markdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';

function App() {
  const [md, setMd] = useState('# Put your markdown here');

  return (
    <>
      <div className="container">
        <h1 className="title">Markdown preview</h1>
        <Editor
          value={md}
          onChange={setMd}
          autoFocus={true}
          className="editor"
          options={{
            mode: 'markdown',
            readOnly: false,
            lineNumbers: true,
          }}
        />
        <Markdown className="preview" source={md} escapeHtml={true} />
      </div>
    </>
  );
}

export default App;
