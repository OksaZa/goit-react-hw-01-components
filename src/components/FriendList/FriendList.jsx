import { List } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
    return (
        <List className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li className="item" key={id}>
                        <span className={`status ${isOnline ? 'true' : 'false'}`}></span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </List>
    )
}