import React from 'react';
import PropTypes from 'prop-types';

export default function Posts(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post, i) => (
        <a href={post.url} key={i} style={{ display: 'block' }}>
          {post.title}
        </a>
      ))}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
