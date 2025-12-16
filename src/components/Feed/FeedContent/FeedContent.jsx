import { posts } from '../mocks/posts';
import FeedItem from '../FeedItem/FeedItem';

import './FeedContent.scss';
import { useState } from 'react';

const INITIAL_COUNT = 8;

function FeedContent({ view }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visiblePosts = isExpanded
    ? posts
    : posts.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className={`feed-content feed-content--${view}`}>
        {visiblePosts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
      {posts.length > INITIAL_COUNT && (
        <button
          className="loadMore-btn"
          onClick={() => setIsExpanded(prev => !prev)}
        >
          {isExpanded ? 'Load less' : 'Load more'}
        </button>
      )}
    </>
  );
}

export default FeedContent;