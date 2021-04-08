import PostCard from './../PostCard';
import P from 'prop-types';

import './styles.css';

function Posts({ posts = [] }) {
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
  );
}

// O mesmo que passar o valor padrao direto no parametro
// Posts.defaultProps = {
//   posts: [],
// };

// Versão simples
// Posts.propTypes = {
//   posts: P.array,
// };

// Versão complexa
Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};

export default Posts;
