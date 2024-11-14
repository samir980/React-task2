import React, { useState } from 'react';
import { Post } from '../../Models/Post.Model/Post';

interface AddPostProps {
  addPost: (post: Post) => void;
}

const AddPost: React.FC<AddPostProps> = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && body) {
      const newPost: Post = {
        userId: 1,
        id: Date.now(),
        title,
        body,
      };
      addPost(newPost);
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label text-white">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label text-white">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  );
};

export default AddPost;
