import s from './Profile.module.scss'
import PropTypes from 'prop-types'

export default function Profile({ name, tag, location, avatar, stats }) {
  const {followers, views, likes} = stats
return (
<div className={`section ${s.profile}`}>
    <div className={s.description}>
    <img
        src={avatar}
        alt="Аватар пользователя"
        className={s.avatar}
       
    />
    <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>
    <ul className={s.stats}>
    <li className={s.stats__item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
    </li>
    <li className={s.stats__item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
                    
    </li>
    <li className={s.stats__item}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
        })

}