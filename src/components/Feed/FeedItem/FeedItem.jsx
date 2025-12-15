import likeIcon from '../../../assets/icons/like-icon.svg';
import commentIcon from '../../../assets/icons/comment-icon.svg';

function FeedItem({ post }) {
  return (
    <article className="feed-item">
      <div className="feed-item__media">
        <img
          src={post.image}
          alt=""
          className="feed-item__image"
        />
      </div>

      <div className="feed-item__content">
        <div className="feed-item__col">
          <div className="feed-item__title">{post.title}</div>

          <div className="feed-item__stats">
            <span className="feed-item__stat">
              <img src={likeIcon} alt="" /> {post.likes}
            </span>
            <span className="feed-item__stat">
              <img src={commentIcon} alt="" /> {post.comments}
            </span>
          </div>
        </div>

        <div className="feed-item__col">
          <div className="feed-item__date">{post.postDate}</div>

          <div className="feed-item__stats">
            <span className="feed-item__stat">
              <img src={likeIcon} alt="" /> {post.extraLikes}
            </span>
            <span className="feed-item__stat">
              <img src={commentIcon} alt="" /> {post.extraComments}
            </span>
          </div>
        </div>

        <div className="feed-item__col feed-item__col--right">
          <div className="feed-item__type">{post.type}</div>
          <div className="feed-item__upload-date">
            {post.uploadDate}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeedItem;
