import { Link } from 'react-router-dom';

const Post = ({ title, description, url }) => {
  return (
    <>
      <Link to={`/${url}`}>
        <div className="post">
          <div className="post__inner">
            <h3 className="post__title">{title}</h3>
            <p className="post__text">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
