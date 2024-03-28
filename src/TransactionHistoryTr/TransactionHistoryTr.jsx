export default function TransactionHistoryTr({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
