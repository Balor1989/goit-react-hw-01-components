import Profile from "./components/profile/Profile";
import user from './components/JSON/user.json'
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import friends from "./components/JSON/friends.json"
import stat from './components/JSON/statistics-data.json'
function App() {
  return (<div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics title={'Statistics'} prop={stat}/>
    <FriendList prop={friends}/>
    </div>
  );
}

export default App;
