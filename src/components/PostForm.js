import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../features/posts/postsSlice';
import { TextField, Button } from '@mui/material';
import RichTextEditor from './RichTextEditor';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

const PostForm = ({ post, onSave }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(post ? post.title : '');
  const [editorState, setEditorState] = useState(post ? EditorState.createWithContent(convertFromRaw(JSON.parse(post.content))) : EditorState.createEmpty());

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    if (post) {
      dispatch(editPost({ ...post, title, content }));
    } else {
      dispatch(addPost({ id: Date.now(), title, content }));
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Save
      </Button>
    </form>
  );
};

export default PostForm;
