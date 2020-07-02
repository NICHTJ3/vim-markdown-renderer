import React from 'react';
import Editor from 'react-codemirror';
import './editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/keymap/vim';

export default function index({value,onChange}) {
  return (
    <Editor
      value={value}
      onChange={onChange}
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
  );
}
