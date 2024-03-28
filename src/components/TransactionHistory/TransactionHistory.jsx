import TransactionHistoryTr from "../../TransactionHistoryTr/TransactionHistoryTr";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr className={css.friendListItem} key={transaction.id}>
            <TransactionHistoryTr transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
