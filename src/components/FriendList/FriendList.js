import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'
import s from './FriendList.module.scss'

export default function FriendList({ friends }) {
    return (
        <ul className={s.friend__list}>
            {friends.map(friend => (<li key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>))}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.number,
}

  