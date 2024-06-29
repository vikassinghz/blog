import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = ({ editorState, setEditorState }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', minHeight: '400px' }}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default RichTextEditor;
