import PropTypes from 'prop-types'
import s from './FriendList.module.scss'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={s.card}>
            <span className={s.status} style={isOnline
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'red' }}>
            </span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </li>  
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
}