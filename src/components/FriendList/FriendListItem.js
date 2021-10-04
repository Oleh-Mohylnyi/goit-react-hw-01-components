import PropTypes from 'prop-types'
import s from './FriendList.module.scss'

export default function FriendListItem({ id, avatar, name, isOnline }) {
return (<div className={s.card}>
    <span className={s.status} style={isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
    </span>
    <img className={s.avatar} src={avatar} alt="" width="48" />
    <p className={s.name}>{name}</p>
</div>   
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
}