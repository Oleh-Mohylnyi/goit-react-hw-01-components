import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'
import s from './FriendList.module.scss'

export default function FriendList({ friends }) {
    return (
        <ul className={s.friend__list}>
            {friends.map(friend => (
                <FriendListItem key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.number,
}

  