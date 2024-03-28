// import css from "./App.module.css";
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
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendList friend={friend} />
          </li>
        ))}
      </ul>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <TransactionHistory transaction={transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
}
