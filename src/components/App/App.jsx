// import css from "./App.module.css";
import UserData from "..//../userData.json";
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import friends from "..//../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "..//../transactions.json";

export default function App() {
  return (
    <div>
      <Profile data={UserData} />
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
