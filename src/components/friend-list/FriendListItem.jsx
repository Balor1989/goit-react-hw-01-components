import propTypes from "prop-types"




function FriendListItem(props) {
    const {id, avatar, name, isOnline } = props
    return (
        <li className="item" key={id}>
            <span className="status">{ isOnline}</span>
            <img src={avatar} alt={name} className="avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool
}