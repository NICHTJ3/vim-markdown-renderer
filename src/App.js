import React from 'react';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';
import Preview from './components/Preview';

function App() {
  const [md, setMd] = useLocalStorage('document', '# Put your markdown here');

  return (
    <>
      <div className="container">
        <h1 className="title">Vim Markdown Preview</h1>
        <Editor value={md} onChange={setMd} />
        <Preview md={md} />
      </div>
    </>
  );
}

export default App;
