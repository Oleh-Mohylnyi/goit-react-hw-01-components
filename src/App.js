import Profile from './components/Profile/Profile'
import user from './data/user.json'
import Statistical from './components/Statistics/Statistical'
import statisticalData from './data/statistical-data.json'
import FriendList from './components/FriendList/FriendList'
import friends from './data/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './data/transactions.json'


function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical
        title="Upload stats"
        stats={statisticalData}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
}

export default App;
