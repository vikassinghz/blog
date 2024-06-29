import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../features/posts/postsSlice';
import { Button, Card, CardContent, Typography } from '@mui/material';

const PostList = ({ onEdit }) => {
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Button variant="contained" color="primary" onClick={() => onEdit(post)}>
              Edit
            </Button>
            <Button variant="contained" color="secondary" onClick={() => dispatch(deletePost(post.id))} style={{ marginLeft: '10px' }}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
