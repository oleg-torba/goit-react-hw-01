import PropTypes from 'prop-types';
import profileCss from './profile.module.css';

export function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <>
      <div className={profileCss.profile}>
        <div className={profileCss.description}>
          <img className={profileCss.img} src={avatar} alt="img" />
          <h1 className={profileCss.title}>{username}</h1>
          <p className={profileCss.location}>@{tag}</p>
          <p className={profileCss.location}>{location}</p>
        </div>
        <ul className={profileCss.stats}>
          <li className={profileCss.item}>
            <span className={profileCss.itemTitle}>Followers</span>
            <span className={profileCss.itemValue}>{followers}</span>
          </li>
          <li className={profileCss.item}>
            <span className={profileCss.itemTitle}>Views</span>
            <span className={profileCss.itemValue}>{views}</span>
          </li>
          <li className={profileCss.item}>
            <span className={profileCss.itemTitle}>Likes</span>
            <span className={profileCss.itemValue}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
