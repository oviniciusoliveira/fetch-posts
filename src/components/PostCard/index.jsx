import React from 'react';

import P from 'prop-types';

import './styles.css';

function PostCard({ id, cover, title, body }) {
  return (
    <div key={id} className="post">
      <img className="post-cover" src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};

export default PostCard;
