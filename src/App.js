import React, { useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { Container, Button, Typography } from '@mui/material';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setCurrentPost(null);
  };

  return (
    <Container>
      <ThemeSwitcher />
      <Typography variant="h3" align="center" gutterBottom>
        My Blog Application
      </Typography>
      {isEditing ? (
        <PostForm post={currentPost} onSave={handleSave} />
      ) : (
        <div>
          <Button variant="contained" color="primary" onClick={() => setIsEditing(true)} style={{ marginBottom: '20px' }}>
            Create New Post
          </Button>
          <PostList onEdit={handleEdit} />
        </div>
      )}
    </Container>
  );
};

export default App;
