import React from 'react';
import { Link } from 'react-router-dom';

function PostSummary({ post }) {
  const { id, slug, title, content } = post;
  return (
    <article className="PostSummary">
      <h2>{title}</h2>
      <div>{content.substr(0, 40)}&hellip;</div>
      <Link
        to={`/${id}`}
      >
        Read more
      </Link>
    </article>
  );
}

export default PostSummary;
