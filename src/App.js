import React from 'react';
import Editor from 'react-codemirror';
import Markdown from 'react-markdown';
import useLocalStorage from './useLocalStorage';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/keymap/vim';

function App() {
  const [md, setMd] = useLocalStorage('document', '# Put your markdown here');

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
            keyMap: 'vim',
            theme: 'material',
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
