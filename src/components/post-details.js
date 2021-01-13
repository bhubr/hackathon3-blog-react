import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetails() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const baseUrl = 'http://my-json-server.typicode.com/bhubr/hackathon3-fake-api/posts';
    axios.get(`${baseUrl}/${slug}`)
      .then(res => setPost(res.data))
  })

  if (!post) {
    return <p>Loading</p>;
  }
  return (
    <article className="PostDetails">
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}

export default PostDetails;
