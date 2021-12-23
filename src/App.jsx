import Profile from "./components/profile/Profile";
import user from './components/JSON/user.json'
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import friends from "./components/JSON/friends.json"
import stat from './components/JSON/statistics-data.json'
import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from './components/JSON/transactions.json'

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
    <FriendList prop={friends} />
    <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
