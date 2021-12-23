import propTypes from "prop-types"

function Profile(props) {
   const {username, tag, location, avatar, stats} = props
   return (
      <div className="profile">
         <div className="description">
            <img className="avatar" src={avatar} alt={username} />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
         </div>
         <ul className="stats">
            <li>
               <span className="label">followers</span>
               <span className="quantity">{stats.followers}</span>
            </li>
            <li>
               <span className="label">views</span>
               <span className="quantity">{stats.views}</span>
            </li>
            <li>
               <span className="label">likes</span>
               <span className="quantity">{stats.likes}</span>
            </li>
         </ul>
      </div>
   )
}

export default Profile

Profile.propTypes = {
   username: propTypes.string.isRequired,
   tag: propTypes.string.isRequired,
   location: propTypes.string.isRequired,
   stats: propTypes.shape ({
      followers: propTypes.number,
      views: propTypes.number,
      likes:propTypes.number
   })
}
