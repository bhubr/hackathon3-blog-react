import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetails() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/bhubr/hackathon3-fake-api/posts';
    axios.get(`${baseUrl}/${slug}`)
      .then(res => setPost(res.data))
  })

  if (!post) {
    return <p>Loading</p>;
  }
  return (
    <article className="PostDetails">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Retour à l'accueil</Link>
    </article>
  );
}

export default PostDetails;
