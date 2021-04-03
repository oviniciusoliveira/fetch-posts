import React from "react";

import './styles.css'

function PostCard({ id, cover, title, body }) {
  return (
    <div className="post">
      <img className="post-cover" src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default PostCard;
