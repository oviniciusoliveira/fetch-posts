import React from 'react'
import PostCard from './../PostCard'

import './styles.css'

function Posts({posts}) {
    return (
        <div className="posts">
        {posts.map((post) => (
          <PostCard
            // post={post}
            key={post.id}
            id={post.id}
            cover={post.cover}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    )
}

export default Posts
