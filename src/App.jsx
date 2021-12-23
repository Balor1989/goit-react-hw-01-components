import Profile from "./components/profile/Profile";
import user from './components/JSON/user.json'
import Statistics from "./components/statistics/Statistics";


function App() {
  return (<div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics />
    </div>
  );
}

export default App;
