import { useState, useEffect } from 'react';
import axios from 'axios';
import PostSummary from './post-summary';

function PostList() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    axios.get('http://my-json-server.typicode.com/bhubr/hackathon3-fake-api/posts')
      .then(res => setPosts(res.data))
  })
  return (
    <section className="PostList">
      {posts && posts.map(post => (
        <PostSummary key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;