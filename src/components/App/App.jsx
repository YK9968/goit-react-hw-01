import userData from "..//../userData.json";
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import friends from "..//../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "..//../transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
