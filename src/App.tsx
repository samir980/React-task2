import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Posts } from './Components/Posts.component/Posts'
import { Post } from './Models/Post.Model/Post'
import AddPost from './Components/AddNewPost.component/addNewPost'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data)) 
  });
  const addNewPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-white pt-5">Posts</h1>
      <AddPost addPost={addNewPost} />
      <Posts posts={posts} />
    </div>
  );
};


export default App
