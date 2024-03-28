import css from "./TransactionHistoryTr.module.css";

export default function TransactionHistoryTr({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.tableValue}>{type}</td>
      <td className={css.tableValue}>{amount}</td>
      <td className={css.tableValue}>{currency}</td>
    </>
  );
}
