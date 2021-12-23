import FriendListItem from "./FriendListItem";

function FriendList({prop}) {
    return (
        <ul className="friend-list">
            {prop.map(item => (
                <FriendListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </ul>
    )
}

export default FriendList