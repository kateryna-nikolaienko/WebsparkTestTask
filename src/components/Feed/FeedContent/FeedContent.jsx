import { posts } from '../mocks/posts';
import FeedItem from '../FeedItem/FeedItem';

import './FeedContent.scss';

function FeedContent({ view }) {
  return (
    <>
      <div className={`feed-content feed-content--${view}`}>
        {posts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
      <button className="loadMore-btn">LOAD MORE</button>
    </>
  );
}

export default FeedContent;